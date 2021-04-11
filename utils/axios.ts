import axios from 'axios';

const baseURL = typeof window !== 'undefined'
  ? process.env.NEXT_PUBLIC_BASE_API_URL
  : process.env.BASE_API_URL;

const instance = axios.create({
  baseURL,
});

export default instance;
