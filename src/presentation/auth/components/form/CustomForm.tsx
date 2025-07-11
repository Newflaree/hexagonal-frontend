import {
  FormEvent,
  ComponentType,
  FC,
} from 'react';


export interface WithCustomFormInjectedProps {
  onSubmit: ( event: FormEvent<HTMLFormElement> ) => void;
  loading?: boolean;
  error?: string | null;
}

export const withCustomForm = <P extends object>(
  WrappedComponent: ComponentType<P>,
  formClassName = 'space-y-4 max-w-sm mx-auto'
): FC<P & WithCustomFormInjectedProps> => {
  const ComponentWithForm: FC<P & WithCustomFormInjectedProps> = ({
    onSubmit,
    loading,
    error,
    ...rest
  }) => (
    <form
      onSubmit={ onSubmit }
      className={ formClassName }
    >
      <WrappedComponent
        error={ error }
        loading={ loading }
        { ...( rest as P ) }
      />

      {
        error && 
          <p className="text-red-500 text-sm">{ error }</p>
      }
    </form>
  );

  ComponentWithForm.displayName = `withCustomForm(${
    WrappedComponent.displayName ||
    WrappedComponent.name ||
    'Component'
  })`;

  return ComponentWithForm;
};
