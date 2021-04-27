import urljoin from 'url-join';

import * as axios from '../utils/axios';

import { User } from '../interfaces/models/User';

const API_AUTH_URL = 'auth';

interface AuthObject {
  token: string;
  userId: string;
  consentTos: boolean;
}

export const getMe = async() => {
  const url = urljoin(API_AUTH_URL, 'me');
  const { data } = await axios.instance.get<User>(url);
  return data;
};

export const login = async(loginId: string, password: string) => {
  const url = urljoin(API_AUTH_URL, 'login');
  const { data } = await axios.instance.post<AuthObject>(url, {
    loginId,
    password,
  });
  return data;
};

export const getAuthObject = async() => {
  const url: string = urljoin(API_AUTH_URL, 'auth-object');
  const { data } = await axios.instance.get<AuthObject>(url);
  return data;
};
