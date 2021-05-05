import urljoin from 'url-join';

import * as axios from '../utils/axios';

import { Instrument } from '../interfaces/models/Instrument';

const API_INSTRUMENT_URL = 'instruments';

export const getInstruments = async() => {
  const url = urljoin(API_INSTRUMENT_URL);
  const { data } = await axios.instance.get<Instrument[]>(url);
  return data;
};

export const getInstrument = async(id: number) => {
  const url = urljoin(API_INSTRUMENT_URL, id.toString());
  const { data } = await axios.instance.get<Instrument>(url);
  return data;
};
