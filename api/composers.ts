import urljoin from 'url-join';

import * as axios from '../utils/axios';

import { Composer } from '../interfaces/models/Composer';

const API_COMPOSER_URL = 'composers';

export const getComposers = async() => {
  const url = urljoin(API_COMPOSER_URL);
  const { data } = await axios.instance.get<Composer[]>(url);
  return data;
};

export const getComposer = async(id: number) => {
  const url = urljoin(API_COMPOSER_URL, id.toString());
  const { data } = await axios.instance.get<Composer>(url);
  return data;
};

export const getTopPageLinkedComposers = async() => {
  const url = urljoin(API_COMPOSER_URL, 'top-page-linked');
  const { data } = await axios.instance.get<Composer[]>(url);
  return data;
};

export const createComposer = async(composer: Composer) => {
  const url = urljoin(API_COMPOSER_URL);
  const { data } = await axios.instance.post<Composer>(url, composer);
  return data;
};

export const getComposersByPlaystyleId = async(id: number) => {
  const url = urljoin(API_COMPOSER_URL, 'playstyles', id.toString());
  const { data } = await axios.instance.get<Composer[]>(url);
  return data;
};

export const searchComposers = async(searchWord: string) => {
  const url = urljoin(API_COMPOSER_URL, 'search');
  const { data } = await axios.instance.get<Composer[]>(url, {
    params: {
      searchWord,
    },
  });
  return data;
};
