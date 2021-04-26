import { Instrument } from '../interfaces/Instrument';

type Props = {
  placeholder: string;
  instruments: Instrument[];
}

const SearchForm: React.FC<Props> = ({ placeholder, instruments }: Props) => {
  return (
    <>
      <form>
        <div className="d-flex">
          <input type="text" placeholder={placeholder} />
          <select className="w-auto rounded-0">
            {instruments.map(instrument => <option value={instrument.id}>{instrument.shortName}</option>)}
          </select>
          <button type="submit" className="btn text-nowrap btn-primary"></button>
        </div>
      </form>
    </>
  );
};

export default SearchForm;
