import { GetServerSideProps } from 'next';

import { getLatestTos } from '../../api/terms';

type Props = {
  tos: string
}

const TosPage: React.FC<Props> = ({ tos }: Props) => {

  return (
    <section className="container">
      <div>
        <h1>
          利用規約
        </h1>
        <pre className="yrl-pre-wrap">
          {tos}
        </pre>
      </div>
    </section>
  );
};

export const getServerSideProps: GetServerSideProps = async() => {
  const tos = await getLatestTos();
  return { props: { tos } };
};

export default TosPage;
