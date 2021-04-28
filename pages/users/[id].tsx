import { GetServerSideProps } from 'next';

import { getUser } from '../../api/users';

import { User } from '../../interfaces/models/User';

type Props = {
  user: User
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
  const user = await getUser(params?.id as string);
  return { props: { user } };
};

export default ShowUser;
