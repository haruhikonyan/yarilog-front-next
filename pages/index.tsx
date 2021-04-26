import { GetServerSideProps } from 'next';

import SearchForm from '../components/SearchForm';
import * as axios from '../utils/axios';

import { PlayingLog } from '../interfaces/PlayingLog';
import { Composer } from '../interfaces/Composer';
import { Genre } from '../interfaces/Tune';
import { Instrument } from '../interfaces/Instrument';

type Props = {
  playingLogs: PlayingLog[],
  topPageLinkedComposers: Composer[],
  topPageLinkedGenres: Genre[],
  instruments: Instrument[],
}

const IndexPage: React.FC<Props> = ({
  playingLogs,
  topPageLinkedComposers,
  topPageLinkedGenres,
  instruments,
}: Props) => {

  return (
    <>
      {/* <header></header> */}
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
          <section className="mt-3 mb-2">
            <SearchForm placeholder="演奏記録を探す(フリーワード)" instruments={instruments}></SearchForm>
            <div className="text-end text-primary mt-1 mr-3">
              <span role="button" tabIndex={0}>詳細検索</span>
            </div>
          </section>
          <div className="card mb-2">
            <div className="card-body px-2 px-sm-3">
              <h4 className="card-title">演奏楽器から探す</h4>
              <div className="d-flex flex-wrap text-start">
                {instruments.map(instrument => <a href={`/instruments/${instrument.id}`} className="yrl-instrument-link">&gt;{instrument.name}</a>)}
              </div>
            </div>
          </div>
          {/* <ins 広告></ins> */}
          <p className="mt-3 mb-2">最新の演奏記録</p>
          {/* Carousel */}
          <div className="card mb-2">
            <div className="card-body">
              <h4 className="card-title">作曲家から探す</h4>
              <div className="row text-start">
                {/* eslint-disable-next-line max-len */}
                {topPageLinkedComposers.map(composer => <a className="col-6 col-sm-4 col-md-3 col-lg-2 yrl-conposer-link" href={`/composers/${composer.id}`}>&gt;{composer.displayName}</a>)}
              </div>
            </div>
          </div>
        </div>
        {/* <ins 広告></ins> */}
        <div className="card mb-2 text-center">
          <div className="card-body">
            <h4 className="card-title">みゅーぐ開発において</h4>
            <pre className="yrl-pre-wrap yrl-info text-start mb-0">
              日本国内で楽器を演奏する人は人口の10%、つまり1200万人以上いると言われています。
              {/* eslint-disable-next-line max-len */}
              しかし、たくさんの人が曲や演奏にかける思いを共有するサービスは未だ存在しません。「この曲の素晴らしいところはここだ」「この曲は実はこんなことを考えながら演奏していた」そんなレビューを記録に残すことで、書く側は自身の思い出整理に用いたり、あるいは読む側はこれからの選曲会議での参考にしたり、レビュアーをエキストラに誘ってみたり、使い方は無限だと思っています。
              是非、『みゅーぐ』を自由に活用してください。
              楽器と演奏を愛するみなさんの活動の一助になれば幸いです。

              なお、みゅーぐの開発を手伝ってくださる方を募集しています。
              興味のある方は
              <a href="/inquiry?inquiryTypeId=7">問い合わせフォーム</a>
              もしくは
              <a href="https://twitter.com/musig_net">公式Twitter</a>
              などでご連絡ください。
            </pre>
          </div>
        </div>
        <div className="card mb-2 text-center">
          <div className="card-body">
            <h4 className="card-title">ジャンルから探す</h4>
            <div className="d-flex flex-wrap text-start">
              {topPageLinkedGenres.map(genre => <a href={`/genres/${genre.id}`} className="yrl-genre-link">&gt;{genre.name}</a>)}
            </div>
          </div>
        </div>
      </div>
      {/* <ins 広告></ins> */}
      {/* <hooter></hooter> */}
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
  const topPageLinkedComposers: any[] = (await axios.instance.get('composers/top-page-linked')).data;
  const topPageLinkedGenres: any[] = (await axios.instance.get('genres/top-page-linked')).data;
  const instruments: Instrument[] = (await axios.instance.get('instruments')).data;
  return {
    props: {
      playingLogs,
      topPageLinkedComposers,
      topPageLinkedGenres,
      instruments,
    },
  };
};
export default IndexPage;
