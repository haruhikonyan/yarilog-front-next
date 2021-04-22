import { ReactNode } from 'react';
import Link from 'next/link';
import Head from 'next/head';

type Props = {
  children?: ReactNode
  title?: string
}

const Layout: React.FC<Props> = ({ children, title = 'This is the default title' }: Props) => (
  <div>
    <Head>
      {/* TODO: 動的に https://github.com/haruhikonyan/yarilog-front-next/issues/23 */}
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    {/* TODO: https://github.com/haruhikonyan/yarilog-front-next/issues/4 */}
    <header>
      <nav>
        <Link href="/">
          <a>Home</a>
        </Link>{' '}
        |{' '}
        <Link href="/tunes">
          <a>演奏記録を探す</a>
        </Link>{' '}
        |{' '}
        <Link href="/login">
          <a>ログイン</a>
        </Link>{' '}
        |{' '}
        <Link href="/users/new">
          <a>無料ユーザ登録</a>
        </Link>{' '}
        |{' '}
        <Link href="/inquiry">
          <a>お問い合わせ</a>
        </Link>{' '}
      </nav>
    </header>
    {children}
    <footer>
      <hr />
      <Link href="/terms/tos">
        <a>利用規約</a>
      </Link>{' '}
      |{' '}
      <Link href="/terms/privacy-policy">
        <a>プライバシーポリシー</a>
      </Link>{' '}
      |{' '}
      <Link href="/inquiry">
        <a>お問い合わせ</a>
      </Link>{' '}
    </footer>
  </div>
);

export default Layout;
