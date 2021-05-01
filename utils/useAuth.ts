import useSWR, { mutate } from 'swr';
import Cookie from 'js-cookie';
import { useRouter } from 'next/router';

import { setToken, resetToken, isExistsToken } from './axios';
import { getAuthObject, login as postLogin } from '../api/auth';
import { updateLatestLoginAt } from '../api/users';

export const initLogin = async() => {
  if (!isExistsToken()) {
    const token = Cookie.get('token');
    if (token !== undefined) {
      console.log('init set token');
      setToken(token);
      await mutate('authObject');
      await updateLatestLoginAt();
    }
  }
};


export const useAuth = () => {
  initLogin();
  const router = useRouter();
  const { data, mutate, error } = useSWR('authObject', getAuthObject, { shouldRetryOnError: false });

  const isLoading = !data && !error;
  const isLoggedIn = !error && data;

  const login = async(loginId: string, password: string) => {
    try {
      const { token } = await postLogin(loginId, password);
      Cookie.set('token', token); // saving token in cookie for server rendering
      await initLogin();
      router.push(router.query?.callbackPath as string ?? '/mypage');
    }
    catch (e) {
      if (e.response.status === 401) {
        throw new Error('ユーザ名/メールアドレス もしくは パスワードが間違っています');
      }
    }
  };
  const logout = async() => {
    await router.push('/');
    Cookie.remove('token');
    resetToken();
    await mutate();
  };

  return {
    isLoading,
    isLoggedIn,
    authObject: data,
    mutate,
    login,
    logout,
  };
};
