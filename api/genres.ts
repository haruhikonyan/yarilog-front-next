import urljoin from 'url-join';

import * as axios from '../utils/axios';

import { Genre } from '../interfaces/models/Tune';

const API_GENRE_URL = 'genres';

export const getGenres = async() => {
  const url = urljoin(API_GENRE_URL);
  const { data } = await axios.instance.get<Genre[]>(url);
  return data;
};

export const getTopPageLinkedGenres = async() => {
  const url = urljoin(API_GENRE_URL, 'top-page-linked');
  const { data } = await axios.instance.get<Genre[]>(url);
  return data;
};

export const searchGenres = async(searchWord: string) => {
  const url = urljoin(API_GENRE_URL, 'search');
  const { data } = await axios.instance.get<Genre[]>(url, {
    params: {
      searchWord,
    },
  });
  return data;
};
