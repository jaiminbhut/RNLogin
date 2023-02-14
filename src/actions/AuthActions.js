import { ACTIONS } from '../constants';

export const authorizeUser = (payload) => ({
  type: ACTIONS.authorize,
  payload: payload,
});
