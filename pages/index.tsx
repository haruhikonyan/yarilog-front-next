import { GetServerSideProps } from 'next';
import Link from 'next/link';
import { Alert } from 'reactstrap';

import Layout from '../components/Layout';
import axios from '../utils/axios';

type Props = {
  playingLogs: any[]
}

const IndexPage: React.FC<Props> = ({ playingLogs }: Props) => (
  <Layout title="Home | Next.js + TypeScript Example">
    <h1>Hello Next.js 👋</h1>
    <Alert color="warning">
      This is a warning alert with <a href="#" className="alert-link">an example link</a>. reactstrap サンプルです！！！
    </Alert>
    <p>
      <Link href="/about">
        <a>About</a>
      </Link>
    </p>
    {JSON.stringify(playingLogs)}
  </Layout>
);

export const getServerSideProps: GetServerSideProps = async() => {
  // TODO: api 呼び出し共通化
  const playingLogs: any[] = (await axios.get('playing-logs')).data;
  return { props: { playingLogs } };
};
export default IndexPage;
