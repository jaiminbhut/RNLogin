import { ACTIONS } from '../constants';

const AuthReducer = (state = {}, action) => {
  switch (action.type) {
    case ACTIONS.authorize:
      return action.payload;
    default:
      return state;
  }
};

export default AuthReducer;
