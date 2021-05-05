import { Country } from './Country';

export interface Composer {
  id: number | undefined;
  displayName: string;
  fullName: string;
  description?: string;
  countries: Country[];
}
