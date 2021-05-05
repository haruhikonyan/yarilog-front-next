import urljoin from 'url-join';

import * as axios from '../utils/axios';

import { PlayingLog } from '../interfaces/models/PlayingLog';

const API_PLAYING_LOG_URL = 'playing-logs';

export const getPlayingLogs = async(limit?: number, offset?: number) => {
  const url = urljoin(API_PLAYING_LOG_URL);
  const { data } = await axios.instance.get<PlayingLog[]>(url, {
    params: {
      limit,
      offset,
    },
  });
  return data;
};

export const searchPlayingLogs = async(
    searchWord: string | null,
    instrumentId?: string,
    playstyleId?: string,
    tuneId?: number,
    offset?: number,
    limit?: number,
) => {
  const url = urljoin(API_PLAYING_LOG_URL, 'search');
  const { data } = await axios.instance.get<PlayingLog[]>(url, {
    params: {
      searchWord,
      tuneId,
      instrumentId,
      playstyleId,
      offset,
      limit,
    },
  });
  return data;
};
// getPlayingLog(id: string): Promise<PlayingLog> {
//   const url: string = urljoin(this.API_PLAYING_LOG_URL, id);
//   return this.context.$axios.$get(url);
// }
// getPlayingsLogCount(): Promise<number> {
//   const url: string = urljoin(this.API_PLAYING_LOG_URL, 'count-all');
//   return this.context.$axios.$get(url);
// }
// getPlayingLogsByTune(tuneId: string, offset?: number, limit?: number): Promise<PlayingLog[]> {
//   const url: string = urljoin(this.API_PLAYING_LOG_URL, 'tunes', tuneId);
//   return this.context.$axios.$get(url, {
//     params: {
//       offset,
//       limit
//     }
//   });
// }
// getPlayingLogsByComposer(composerId: string, offset?: number, limit?: number): Promise<PlayingLog[]> {
//   const url: string = urljoin(this.API_PLAYING_LOG_URL, 'composers', composerId);
//   return this.context.$axios.$get(url, {
//     params: {
//       offset,
//       limit
//     }
//   });
// }
// getPlayingLogsByCountry(countryId: string, offset?: number, limit?: number): Promise<PlayingLog[]> {
//   const url: string = urljoin(this.API_PLAYING_LOG_URL, 'countries', countryId);
//   return this.context.$axios.$get(url, {
//     params: {
//       offset,
//       limit
//     }
//   });
// }
// getPlayingLogsByInstrument(instrumentId: string, offset?: number, limit?: number): Promise<PlayingLog[]> {
//   const url: string = urljoin(this.API_PLAYING_LOG_URL, 'instruments', instrumentId);
//   return this.context.$axios.$get(url, {
//     params: {
//       offset,
//       limit
//     }
//   });
// }
// getPlayingLogsByUser(userId: string, offset?: number, limit?: number): Promise<PlayingLog[]> {
//   const url: string = urljoin(this.API_PLAYING_LOG_URL, 'users', userId);
//   return this.context.$axios.$get(url, {
//     params: {
//       offset,
//       limit
//     }
//   });
// }
// createPlayingLog(plyaingLog: PlayingLog): Promise<PlayingLog> {
//   return this.context.$axios.$post(this.API_PLAYING_LOG_URL, plyaingLog);
// }
// updatePlayingLog(plyaingLog: PlayingLog): Promise<PlayingLog> {
//   const url: string = urljoin(this.API_PLAYING_LOG_URL, plyaingLog.id);
//   return this.context.$axios.$put(url, plyaingLog);
// }
