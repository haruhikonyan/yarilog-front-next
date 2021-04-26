import { GetServerSideProps } from 'next';
import { Alert } from 'reactstrap';

// import Link from 'next/link';
// import Layout from '../components/Layout';
import SearchForm from '../components/SearchForm';
import * as axios from '../utils/axios';

import { PlayingLog } from '../interfaces/PlayingLog';
import { Composer } from '../interfaces/Composer';
import { Genre } from '../interfaces/Tune';
import { Instrument } from '../interfaces/Instrument';

type Props = {
  playingLogs: PlayingLog[],
  topPageLinkedComporsers: Composer[],
  topPageLinkedGenres: Genre[],
}

const IndexPage: React.FC<Props> = ({ playingLogs, topPageLinkedComporsers, topPageLinkedGenres }: Props) => {
  const instruments: Instrument[] = playingLogs.map((log) => {
    return log.instrument;
  });

  return (
    <>
      <div className="container">
        <div className="text-center">
          <SearchForm placeholder="演奏記録を探す(フリーワード)" instruments={instruments}></SearchForm>
        </div>
      </div>
      <h1>PlayingLogs</h1>
      {JSON.stringify(playingLogs)}
      <h1>TopPageLinkedComporsers</h1>
      {JSON.stringify(topPageLinkedComporsers)}
      <h1>TopPageLinkedGenres</h1>
      {JSON.stringify(topPageLinkedGenres)}
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async() => {
  // TODO: api 呼び出し共通化
  const playingLogs: any[] = (await axios.instance.get('playing-logs', {
    params: {
      limit: 6,
    },
  })).data;
  const topPageLinkedComporsers: any[] = (await axios.instance.get('composers/top-page-linked')).data;
  const topPageLinkedGenres: any[] = (await axios.instance.get('genres/top-page-linked')).data;
  return { props: { playingLogs, topPageLinkedComporsers, topPageLinkedGenres } };
};
export default IndexPage;
