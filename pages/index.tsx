import { GetServerSideProps } from 'next';

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
  instruments: Instrument[],
}

const IndexPage: React.FC<Props> = ({
  playingLogs,
  topPageLinkedComporsers,
  topPageLinkedGenres,
  instruments,
}: Props) => {

  return (
    <>
      <div className="yrl-top-title jumbotron jumbotron-fluid text-white text-center border-0 px-2 py-3 mt-n3 mb-3">
        <div className="container">
          <h2 className="mt-0 p-3">音楽を奏でる<br className="d-sm-none" />すべてのひとへ</h2>
          <h2 className="p-3">演奏記録の共有サイト</h2>
          <img src="/images/logo.png" alt="みゅーぐ" className="mt-0 mx-auto mb-4" />
          <div className="d-grid yrl-top-btnarea p-3">
            <p>登録曲数<span className="yrl-top-number mx-2">88</span>件 /<br className="d-sm-none" />演奏記録数<span className="yrl-top-number mx-2">103</span>件</p>
            <a href="/playing-logs/new" className="btn yrl-top-btntext mt-3 btn-primary btn-block" target="_self">演奏記録を書く▶︎</a>
          </div>
          <p className="my-3">『みゅーぐ』は楽器、そして演奏を愛する人々が演奏した記録・思い出を、演奏記録という形で残すことのできるWebサービスです。</p>
        </div>
      </div>
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
  const instruments: Instrument[] = (await axios.instance.get('instruments')).data;
  return {
    props: {
      playingLogs,
      topPageLinkedComporsers,
      topPageLinkedGenres,
      instruments,
    },
  };
};
export default IndexPage;
