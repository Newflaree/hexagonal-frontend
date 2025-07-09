// Nextjs
import {
  NextPage,
  GetStaticPaths,
  GetServerSideProps
} from 'next';
// Hooks
import { useCustomHook } from '@/presentation/auth/hooks';
// Views
import { AuthLoginView } from '@/presentation/auth/views';


//interface Props {}
type Props = Record<string, never>

const AuthLoginPage: NextPage<Props> = ({ props }) => {
  const {
    text,
    handleSetText
  } = useCustomHook();

  return <AuthLoginView
    title={ text }
    handleSetText={ handleSetText }
  />
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: 'blocking'
  }
}

export const getServerSideProps: GetServerSideProps<Props> = async () => {
  return {
    props: {}
  }
}

export default AuthLoginPage;
