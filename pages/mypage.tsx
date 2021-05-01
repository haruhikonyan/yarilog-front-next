import { useRequireLogin } from '../utils/useLoginGuard';

const MyPage: React.FC = () => {
  useRequireLogin();
  return (
    <>
      <h1>マイページ</h1>
      <p>
        <a href="https://github.com/haruhikonyan/yarilog-front/blob/master/pages/inquiry.vue" target="_blank" rel="noopener noreferrer">nuxt</a>
      </p>
      <p>
        <a href="https://github.com/haruhikonyan/yarilog-front-next/issues/5" target="_blank" rel="noopener noreferrer">issue</a>
      </p>
    </>
  );
};

export default MyPage;
