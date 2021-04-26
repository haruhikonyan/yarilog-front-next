import { GetServerSideProps } from 'next';
import Link from 'next/link';
import Layout from '../components/Layout';

import { Alert } from 'reactstrap';

import axios from '../utils/axios';

type Props = {
  playingLogs: any[],
  topPageLinkedComporsers: any[],
  topPageLinkedGenres: any[],
}

const IndexPage: React.FC<Props> = ({ playingLogs, topPageLinkedComporsers, topPageLinkedGenres }: Props) => (
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
    <h1>PlayingLogs</h1>
    {JSON.stringify(playingLogs)}
    <h1>TopPageLinkedComporsers</h1>
    {JSON.stringify(topPageLinkedComporsers)}
    <h1>TopPageLinkedGenres</h1>
    {JSON.stringify(topPageLinkedGenres)}
  </Layout>
);

export const getServerSideProps: GetServerSideProps = async() => {
  // TODO: api 呼び出し共通化
  const playingLogs: any[] = (await axios.get('playing-logs', {
    params: {
      limit: 6,
    },
  })).data;
  const topPageLinkedComporsers: any[] = (await axios.get('composers/top-page-linked')).data;
  const topPageLinkedGenres: any[] = (await axios.get('genres/top-page-linked')).data;
  return { props: { playingLogs, topPageLinkedComporsers, topPageLinkedGenres } };
};
export default IndexPage;
