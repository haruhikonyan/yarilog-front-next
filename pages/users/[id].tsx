import { GetServerSideProps } from 'next';

import * as axios from '../../utils/axios';

type Props = {
  user: any
}

const ShowUser: React.FC<Props> = ({ user }: Props) => {

  return (
    <>
      <h1>ユーザ詳細</h1>
      <p>
        <a href="https://github.com/haruhikonyan/yarilog-front/blob/master/pages/users/_id.vue" target="_blank" rel="noopener noreferrer">nuxt</a>
      </p>
      <p>
        <a href="https://github.com/haruhikonyan/yarilog-front-next/issues/17" target="_blank" rel="noopener noreferrer">issue</a>
      </p>
      <div>{JSON.stringify(user)}</div>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async({ params }) => {
  // TODO: api 呼び出し共通化
  const user: any = (await axios.instance.get(`users/${params?.id}`)).data;
  return { props: { user } };
};

export default ShowUser;
