import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useAuth } from './useAuth';

export const useRequireLogin = () => {
  const { isLoggedIn, isLoading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (isLoading) return; // まだ確認中
    console.log('useRequireLogin');

    // 未ログインだったのでリダイレクト
    if (!isLoggedIn) {
      router.push({
        pathname: '/login',
        query: {
          callbackPath: router.asPath,
        },
      });
    }
  }, [isLoggedIn, isLoading, router]);
};

export const useRequireNoLogin = () => {
  const { isLoggedIn, isLoading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (isLoading) return; // まだ確認中
    console.log('useRequireNoLogin');

    // 未ログインだったのでリダイレクト
    if (isLoggedIn) router.push('/'); // ログイン済みだったのでリダイレクト

  }, [isLoggedIn, isLoading, router]);
};
