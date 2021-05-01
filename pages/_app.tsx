import '../styles/app.scss';
import type { AppProps } from 'next/app';
import { useEffect } from 'react';

import { initLogin } from '../utils/useAuth';
import Layout from '../components/Layout';

const MyApp: React.FC<AppProps> = ({ Component, pageProps }: AppProps) => {

  useEffect(() => {
    initLogin();
  }, []);
  return (

    <Layout title="みゅーぐ">
      <Component {...pageProps} />
    </Layout>
  );
};

export default MyApp;
