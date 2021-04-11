import Link from 'next/link';
import { Alert } from 'reactstrap';
import Layout from '../components/Layout';

const IndexPage: React.FC = () => (
  <Layout title="Home | Next.js + TypeScript Example">
    <h1>Hello Next.js 👋</h1>
    <Alert color="warning">
      This is a warning alert with <a href="#" className="alert-link">an example link</a>. reactstrap サンプルです！！！
    </Alert>
    <p>
      <Link href="/about">
        <a>About</a>
      </Link>
    </p>
  </Layout>
);

export default IndexPage;
