import urljoin from 'url-join';

import * as axios from '../utils/axios';

import { User } from '../interfaces/models/User';

const API_USER_URL = 'users';

export const getUsers = async() => {
  const url = urljoin(API_USER_URL);
  const { data } = await axios.instance.get<User[]>(url);
  return data;
};

export const getUser = async(id: string) => {
  const url = urljoin(API_USER_URL, id);
  const { data } = await axios.instance.get<User>(url);
  return data;
};

export const createUser = async(user: User) => {
  const url = urljoin(API_USER_URL);
  const { data } = await axios.instance.post<User>(url, user);
  return data;
};

export const updateUserMailAddress = async(mailAddress: string) => {
  const url = urljoin(API_USER_URL, 'mail-address');
  const { data } = await axios.instance.post<User>(url, { mailAddress });
  return data;
};

export const updateUserNickname = async(nickname: string) => {
  const url = urljoin(API_USER_URL, 'nickname');
  const { data } = await axios.instance.post<User>(url, { nickname });
  return data;
};

export const updateUserDescription = async(description: string) => {
  const url = urljoin(API_USER_URL, 'description');
  const { data } = await axios.instance.post<User>(url, { description });
  return data;
};

export const consentTerms = async(concentTermsId: number) => {
  const url = urljoin(API_USER_URL, 'consent-terms');
  axios.instance.post<void>(url, { concentTermsId });
};

export const updateLatestLoginAt = async() => {
  const url = urljoin(API_USER_URL, 'latest-login-at');
  axios.instance.put<User>(url);
};
