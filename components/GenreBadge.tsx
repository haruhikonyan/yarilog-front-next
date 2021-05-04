import { Genre } from '../interfaces/models/Tune';

type Props = {
  genreName: string;
}

const GenreBadge: React.FC<Props> = ({ genreName }: Props) => {
  return (
    <span className="badge bg-secondary text-dark">{genreName}</span>
  );
};

export default GenreBadge;
