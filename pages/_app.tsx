import '../styles/app.scss';
import type { AppProps } from 'next/app';
import useSWR from 'swr';

import axios from '../utils/axios';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const MyApp = ({ Component, pageProps }: AppProps) => {
  // useSWR('insturments', axios, { initialData: pageProps.insturments });
  // useSWR('playstyles', axios, { initialData: pageProps.playstyles });
  // useSWR('playing-logs/count-all', axios, { initialData: pageProps.playingsLogCount });
  // useSWR('tunes/all-has-playing-log-tunes-count', axios, { initialData: pageProps.allHasPlayingLogTunesCount });
  return <Component {...pageProps} />;
};

MyApp.getInitialProps = async() => {
  // SSR 時のみ実行
  if (typeof window === 'undefined') {
  // TODO: API 呼び出し共通化
    const insturments: any[] = (await axios.get('instruments')).data;
    const playstyles: any[] = (await axios.get('playstyles')).data;
    const playingsLogCount: number = (await axios.get('playing-logs/count-all')).data;
    const allHasPlayingLogTunesCount: number = (await axios.get('tunes/all-has-playing-log-tunes-count')).data;

    return {
      insturments, playstyles, playingsLogCount, allHasPlayingLogTunesCount,
    };
  }
  return {};
};

export default MyApp;
