import {
  InputHTMLAttributes,
  forwardRef
} from 'react';


interface CustomInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

export const CustomInput = forwardRef<HTMLInputElement, CustomInputProps>(
  ({ label, className = '', ...rest }, ref) => (
    <div className='w-full'>
      {
        label && (
          <label className='mb-1 block text-sm font-medium text-gray-700'>
            { label }
          </label>
        )
      }

      <input
        ref={ ref }
        className={ `w-full border p-2 rounded focus:outline-none focus:ring ${ className }` }
        { ...rest }
      />
    </div>
  )
);
