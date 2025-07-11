import type { NextPage, GetServerSideProps } from 'next';
import { useLoginForm } from '@/presentation/auth/hooks/useLoginForm';
import { AuthLoginView } from '@/presentation/auth/views/AuthLoginView';


type Props = Record<string, never>;

const AuthLoginPage: NextPage<Props> = () => {
  const form = useLoginForm();

  return <AuthLoginView
    { ...form }
  />
};

export const getServerSideProps: GetServerSideProps<Props> = async () => {
  return { props: {} };
};

export default AuthLoginPage;
