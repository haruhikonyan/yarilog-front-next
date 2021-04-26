import axios from 'axios';

const baseURL = typeof window !== 'undefined'
  ? process.env.NEXT_PUBLIC_BASE_API_URL
  : process.env.BASE_API_URL;

export const instance = axios.create({
  baseURL,
});

export const setToken = (token: string): void => {
  instance.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const resetToken = (): void => {
  instance.defaults.headers.common.Authorization = undefined;
};
