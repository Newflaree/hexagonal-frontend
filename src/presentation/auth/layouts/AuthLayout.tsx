// React
import {
  Fragment,
  ReactNode
} from 'react';
// Nextjs
import Head from 'next/head';
// Components
import {
  Footer,
  TopMenu
} from '../../shared/components';


interface Props {
  children: ReactNode;
  title: string;
}

export const AuthLayout = ({
  children,
  title
}: Props) => {
  const layoutPageTitle = `test page - ${ title }`;

  return (
    <Fragment>
      <Head>
        <title>{ layoutPageTitle }</title>
      </Head>

      <div>
        <TopMenu />

        <div>
          { children }
        </div>

        <Footer />
      </div>
    </Fragment>
  );
}
