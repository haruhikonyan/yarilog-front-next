import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { Instrument } from '../interfaces/models/Instrument';

type Props = {
  placeholder: string;
  instruments: Instrument[];
}

const SearchForm: React.FC<Props> = ({ placeholder, instruments }: Props) => {
  return (
    <>
      <form>
        <div className="d-flex">
          <input className="yrl-left-border-round form-control" type="text" placeholder={placeholder} />
          <select className="w-auto rounded-0 custom-select">
            <option value="">全楽器</option>
            {instruments.map(instrument => <option value={instrument.id}>{instrument.shortName}</option>)}
          </select>
          <button type="submit" className="btn text-nowrap btn-primary yrl-right-border-round"><FontAwesomeIcon icon={faSearch} /></button>
        </div>
      </form>
    </>
  );
};

export default SearchForm;
