import { FC, ButtonHTMLAttributes } from 'react';


interface CustomSubmitButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  loading?: boolean;
  label?: string;
}

export const CustomSubmitButton: FC<CustomSubmitButtonProps> = ({
  loading,
  label = 'Enviar',
  className = '',
  children,
  ...rest
}) => (
  <button
    type='submit'
    disabled={ loading || rest.disabled }
    className={ `w-full bg-blue-600 text-white p-2 rounded disabled:opacity-50 ${ className }` }
    { ...rest }
  >
    {
      loading
        ? 'Cargando…'
        : children ?? label
    }
  </button>
);
