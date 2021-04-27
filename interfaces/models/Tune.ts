import { Composer } from './Composer';
import { PlayingLog } from './PlayingLog';

// ジャンル(タグ)
export interface Genre {
  id: number;
  name: string;
  description: string;
}

// 演奏形態
export interface Playstyle {
  id: number;
  name: string;
  description: string;
}

export interface Tune {
  id?: number;
  title: string;
  description?: string;

  playstyle: Playstyle;
  genres: Genre[];

  // 平均難易度 0~5 小数点第１位
  averageDifficulty?: number;
  // 平均体力 0~5 小数点第１位
  averagePhysicality?: number;
  // 平均面白さ 0~5 小数点第１位
  averageInteresting?: number;

  // 紐付いてる演奏記録の総数
  countPlayingLogs?: number;

  composer: Composer;
  playingLogs?: PlayingLog[];
}

export interface TuneSearchObject {
  searchWord?: string;
  instrumentId?: string;
  composerId?: string;
  playstyleId?: string;
  genreId?: string;
}

export interface TunesWithCount {
  tunes: Tune[];
  totalCount: number;
}
