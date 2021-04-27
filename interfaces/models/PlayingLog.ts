import { User } from './User';
import { Tune, Playstyle } from './Tune';
import { Instrument } from './Instrument';

export enum PlayerLevel {
  BEGINNER = '初心者',
  INTERMEDIATE = '中級者',
  SENIOR = '上級者',
  UNIVERSITY_OF_MUSIC = '音大生',
  PRO = 'プロ'
}

export interface PlayingLog {
  id: string | undefined;
  // 編曲者
  arranger?: string;
  // 版や稿など
  edition?: string;
  // 演奏シーン(定期演奏会中プロ、コンクール自由曲とか)
  scene?: string;
  // 演奏日
  playDate?: Date;
  // 演奏団体
  team?: string;
  // 自分の演奏レベル
  playerLevel: PlayerLevel;
  // 担当パート
  instrument: Instrument;
  // ポジション 1stとかバンダとか
  position?: string;
  // 難易度 5段階
  difficulty?: number;
  // 体力 5段階
  physicality?: number;
  // 面白さ 5段階
  interesting?: number;
  // 面白かったところ
  impressionOfInteresting?: string;
  // 難しかったところ
  impressionOfDifficulty?: string;
  // 次への反省
  reflectionForNext?: string;
  // 他のパートや全体について
  otherPartInpression?: string;
  // 非公開のメモ
  secretMemo?: string;
  // 下書きフラグ
  isDraft: boolean;
  tune: Tune;
  user: User;
  // 演奏形態
  playstyle: Playstyle;
}

export interface PlayingLogsWithCount {
  playingLogs: PlayingLog[];
  totalCount: number;
}
