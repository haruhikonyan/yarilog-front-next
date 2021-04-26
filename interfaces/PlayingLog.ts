import { User } from './User';
import { Tune, PlayStyle } from './Tune';
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
  arranger?: string | null;
  // 版や稿など
  edition?: string | null;
  // 演奏シーン(定期演奏会中プロ、コンクール自由曲とか)
  scene?: string | null;
  // 演奏日
  playDate?: Date | null;
  // 演奏団体
  team?: string | null;
  // 自分の演奏レベル
  playerLevel: PlayerLevel;
  // 担当パート
  instrument: Instrument;
  // ポジション 1stとかバンダとか
  position?: string | null;
  // 難易度 5段階
  difficulty: number | null;
  // 体力 5段階
  physicality: number | null;
  // 面白さ 5段階
  interesting: number | null;
  // 面白かったところ
  impressionOfInteresting: string | null;
  // 難しかったところ
  impressionOfDifficulty: string | null;
  // 次への反省
  reflectionForNext: string | null;
  // 他のパートや全体について
  otherPartInpression: string | null;
  // 非公開のメモ
  secretMemo: string | null;
  // 下書きフラグ
  isDraft: boolean;
  tune: Tune;
  user: User;
  // 演奏形態
  playstyle: PlayStyle;
}

export interface PlayingLogsWithCount {
  playingLogs: PlayingLog[];
  totalCount: number;
}
