import { GetServerSideProps } from 'next';

import { getLatestPrivacyPolicy } from '../../api/terms';

type Props = {
  privacyPolicy: string
}

const PrivacyPolicyPage: React.FC<Props> = ({ privacyPolicy }: Props) => {

  return (
    <section className="container">
      <div>
        <h1>
          プライバシーポリシー
        </h1>
        <pre className="yrl-pre-wrap">
          { privacyPolicy }
        </pre>
      </div>
    </section>
  );
};

export const getServerSideProps: GetServerSideProps = async() => {
  const privacyPolicy = await getLatestPrivacyPolicy();
  return { props: { privacyPolicy } };
};

export default PrivacyPolicyPage;
