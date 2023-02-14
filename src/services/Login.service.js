import { apiConfig } from '.';
import UrlConst from '../constants/Url.const';

export const authorize = async (payload) => {
  const response = await apiConfig().post(UrlConst.login, payload);

  return response.data;
};
