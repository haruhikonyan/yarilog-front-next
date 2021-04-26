import { Instrument } from '../interfaces/Instrument';

type Props = {
  placeholder: string;
  instruments: Instrument[];
}

const SearchForm: React.FC<Props> = ({ placeholder, instruments }: Props) => {
  return (
    <>
      <h1>{placeholder}</h1>
      <h4>{instruments.map(instrument => <h4>{instrument.name || ''}</h4>)}</h4>
    </>
  );
};

export default SearchForm;
