import type { FormEvent } from 'react';
import { LoginForm } from '../components/form/LoginForm';
import { AuthLayout } from '../layouts/AuthLayout';


interface AuthViewProps {
  email: string;
  password: string;
  loading: boolean;
  error: string | null;
  setEmail( v: string ): void;
  setPassword( v: string ): void;
  handleSubmit(): Promise<void>;
}

export function AuthLoginView({
  email,
  password,
  setEmail,
  setPassword,
  loading,
  error,
  handleSubmit,
}: AuthViewProps) {
  const onSubmit = (event: FormEvent) => {
    event.preventDefault();
    void handleSubmit();
  };

  return (
    <AuthLayout title='Login'>
      <LoginForm
        email={ email }
        password={ password }
        setEmail={ setEmail }
        setPassword={ setPassword }
        loading={ loading }
        error={ error }
        onSubmit={ onSubmit }
      />
    </AuthLayout>
  );
}
