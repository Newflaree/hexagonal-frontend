import {
  Fragment,
  ReactNode
} from 'react';
import Head from 'next/head';


interface AuthLayoutProps {
  children: ReactNode;
  title: string;
}

export const AuthLayout = ({
  children,
  title
}: AuthLayoutProps) => {
  const pageTitle = `Authentication - ${ title }`;

  return (
    <Fragment>
      <Head>
        <title>{ pageTitle }</title>
      </Head>

      <main className='min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 p-4'>
        <section className='w-full max-w-md rounded-2xl bg-white shadow-xl p-8'>
          { children }
        </section>
      </main>
    </Fragment>
  );
}
