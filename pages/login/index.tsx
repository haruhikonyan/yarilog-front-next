import { useForm } from 'react-hook-form';

import { useState } from 'react';
import useAuth from '../../utils/useAuth';
import { getMe } from '../../api/auth';


type FormInputs = {
  loginId: string;
  password: string;
};

const LoginPage: React.FC = () => {
  const [loginErrorMessage, setLoginErrorMessage] = useState<string>();
  const { register, handleSubmit } = useForm<FormInputs>();
  const { login, logout } = useAuth();

  const postLogin = async(loginObject: FormInputs) => {
    try {
      await login(loginObject.loginId, loginObject.password);
      // this.$router.push(this.callbackPath || '/mypage');
    }
    catch (e) {
      setLoginErrorMessage(e.message);
    }
  };
  return (
    <>
      <h1>ログイン</h1>
      <p>
        <a href="https://github.com/haruhikonyan/yarilog-front/blob/master/pages/login/index.vue" target="_blank" rel="noopener noreferrer">nuxt</a>
      </p>
      <p>
        <a href="https://github.com/haruhikonyan/yarilog-front-next/issues/6" target="_blank" rel="noopener noreferrer">issue</a>
      </p>

      <form onSubmit={handleSubmit(postLogin)}>
        <input type="text" {...register('loginId')} />
        <input type="password" {...register('password')} />
        <input type="submit" />
      </form>
      <div className="alert alert-danger" role="alert">{loginErrorMessage}</div>
      <button type="button" onClick={getMe}>
        me
      </button>
      <button type="button" onClick={logout}>
        logout
      </button>
    </>
  );
};

export default LoginPage;
