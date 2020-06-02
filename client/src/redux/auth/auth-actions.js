import { SET_AUTH_STATUS } from './auth-action-types';

export const setAuthStatus = (bool) => (dispatch) => dispatch({ type: SET_AUTH_STATUS, payload: bool });
