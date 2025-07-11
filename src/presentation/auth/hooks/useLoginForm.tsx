import { useState } from 'react';
import { logger } from '@/common/logger/logger';
import { LoginDto } from '@/application/auth/dto/LoginDto';
import { AuthApiAdapter } from '@/infrastructure/auth/adapters/AuthApiAdapter';
import { LoginUserUseCase } from '@/application/auth/use-cases/LoginUserUseCase';


export const useLoginForm = () => {
  const [ email, setEmail ] = useState( '' );
  const [ password, setPassword ] = useState( '' );
  const [ loading, setLoading ] = useState( false );
  const [ error, setError ] = useState<string | null>( null );

  const repo = new AuthApiAdapter();
  const loginCase = new LoginUserUseCase( repo );

  const handleSubmit = async () => {
    setLoading( true );
    setError( null );

    logger.debug( 'AuthLogin - submit clicked', { email } );

    try {
      const dto: LoginDto = { email, password };
      const user = await loginCase.execute( dto );

      logger.info( 'AuthLogin - user logged in', {
        id: user.id,
        email: user.email.toString()
      });

      // TODO: Save token or context here
    } catch ( error: unknown ) {
      const message = error instanceof Error ? error.message : 'Error desconocido';
      logger.warn( 'AuthLogin - error on login', message );
    } finally {
      setLoading( false );
    }
  }

  return {
    email,
    password,
    setEmail,
    setPassword,
    loading,
    error,
    handleSubmit
  }
}
