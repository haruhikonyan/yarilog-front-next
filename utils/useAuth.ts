import useSWR from 'swr';
import Cookie from 'js-cookie';

import { setToken, resetToken } from './axios';
import { getAuthObject, login as postLogin } from '../api/auth';
import { updateLatestLoginAt } from '../api/users';

const useAuth = () => {
  const { data, mutate, error } = useSWR('authObject', getAuthObject, { shouldRetryOnError: false });

  const isLoading = !data && !error;
  const isLoggedIn = !error && data;

  // TODO: jwt 期限切れの際の処理
  // https://github.com/haruhikonyan/yarilog-front-next/issues/26
  const initLogin = () => {
    const token = Cookie.get('token');
    if (token !== undefined) {
      setToken(token);
      updateLatestLoginAt();
      mutate();
    }

  };

  const login = async(loginId: string, password: string) => {
    try {
      const { token } = await postLogin(loginId, password);
      Cookie.set('token', token); // saving token in cookie for server rendering

      initLogin();
    }
    catch (e) {
      if (e.response.status === 401) {
        throw new Error('ユーザ名/メールアドレス もしくは パスワードが間違っています');
      }
    }
  };
  const logout = () => {
    Cookie.remove('token');
    resetToken();
    mutate();
  };

  return {
    isLoading,
    isLoggedIn,
    authObject: data,
    mutate,
    initLogin,
    login,
    logout,
  };
};
export default useAuth;
