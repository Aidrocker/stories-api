import {handleActions} from 'redux-actions';

import {ActionTypes} from 'src/store/constants';

export const initialState = {
  loading: false,
  sessionKey: null,
  login: null,
  sublogin: null,
  isError: false,
  isBigSizeWindow: false,
  historyOfResponse: new Set()
};

export default {
  auth: handleActions(
    {
      [ActionTypes.AUTHENTICATE]: (state) => {
        return {
          ...state,
          loading: true,
        };
      },
      [ActionTypes.AUTHENTICATE_SUCCESS]: (state, {payload}) => {
        return {
          ...state,
          loading: false,
          sessionKey: payload.sessionKey,
          login: payload.login,
          sublogin: payload.sublogin,
          isError: false
        };
      },
      [ActionTypes.AUTHENTICATE_FAILURE]: (state) => {
        return {
          ...state,
          loading: false,
          sessionKey: null,
          login: null,
          sublogin: null,
          isError: true
        };
      },
      [ActionTypes.LOGOUT]: (state) => {
        return {
          ...state,
          loading: false,
          sessionKey: null,
        };
      },
    },
    initialState
  ),
};
