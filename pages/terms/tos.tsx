import { GetServerSideProps } from 'next';

import { getLatestTos } from '../../api/terms';

type Props = {
  terms: string
}

const TosPage: React.FC<Props> = ({ terms }: Props) => {

  return (
    <>
      <section className="container">
        <div>
          <h1>
            利用規約
          </h1>
          <pre className="yrl-pre-wrap">
            {terms}
          </pre>
        </div>
      </section>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async() => {
  const terms = await getLatestTos();
  return { props: { terms } };
};

export default TosPage;
