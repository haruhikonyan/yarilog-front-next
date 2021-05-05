import urljoin from 'url-join';

import * as axios from '../utils/axios';

const API_TERMS_URL = 'terms';

export const getLatestTos = async() => {
  const url = urljoin(API_TERMS_URL, 'latest-tos');
  const { data } = await axios.instance.get<string>(url);
  return data;
};

export const getLatestPrivacyPolicy = async() => {
  const url = urljoin(API_TERMS_URL, 'latest-privacy-policy');
  const { data } = await axios.instance.get<string>(url);
  return data;
};
