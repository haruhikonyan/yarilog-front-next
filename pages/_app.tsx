import '../styles/app.scss';
import type { AppProps } from 'next/app';
import { useEffect } from 'react';

import useAuth from '../utils/useAuth';
import Layout from '../components/Layout';

const MyApp: React.FC<AppProps> = ({ Component, pageProps }: AppProps) => {
  const { initLogin } = useAuth();

  useEffect(() => {
    initLogin();
  });
  return (

    <Layout title="みゅーぐ">
      <Component {...pageProps} />
    </Layout>
  );
};

export default MyApp;
