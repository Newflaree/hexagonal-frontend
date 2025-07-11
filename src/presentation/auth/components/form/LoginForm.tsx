import { FC } from 'react';
import { withCustomForm } from './CustomForm';
import { CustomInput } from './CustomInput';
import { CustomSubmitButton } from './CustomSubmitButton';

interface InnerProps {
  email: string;
  password: string;
  setEmail(v: string): void;
  setPassword(v: string): void;
  loading: boolean;
}

const InnerLoginForm: FC<InnerProps> = ({
  email,
  password,
  setEmail,
  setPassword,
  loading,
}) => (
  <>
    <CustomInput
      type='email'
      value={ email }
      onChange={ (e) => setEmail(e.target.value) }
      placeholder='Correo electrónico'
      required
    />

    <CustomInput
      type='password'
      value={ password }
      onChange={ (e) => setPassword(e.target.value) }
      placeholder='Contraseña'
      required
    />

    <CustomSubmitButton loading={ loading }>
      Entrar
    </CustomSubmitButton>
  </>
);

export const LoginForm = withCustomForm( InnerLoginForm );
