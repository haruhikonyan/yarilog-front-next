import '../styles/app.scss';
import type { AppProps } from 'next/app';

import Layout from '../components/Layout';

const MyApp: React.FC<AppProps> = ({ Component, pageProps }: AppProps) => (

  <Layout title="みゅーぐ">
    <Component {...pageProps} />
  </Layout>
);

export default MyApp;
