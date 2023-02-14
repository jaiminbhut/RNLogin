import axios from 'axios';
import { PARENT_URL } from '../constants';

export const apiConfig = () =>
  axios.create({
    baseURL: PARENT_URL,
    timeout: 30000,
    headers: { 'Cache-Control': 'no-cache' },
  });
