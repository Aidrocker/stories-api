import {createActions} from 'redux-actions';

import {ActionTypes} from 'src/store/constants';

export const {authenticate, authenticateSuccess, authenticateCheck, authenticateFailure, logout} = createActions({
  [ActionTypes.AUTHENTICATE]: (payload: any) => payload,
  [ActionTypes.AUTHENTICATE_CHECK]: (payload: any) => payload,
  [ActionTypes.AUTHENTICATE_SUCCESS]: (payload: any) => payload,
  [ActionTypes.AUTHENTICATE_FAILURE]: (payload: any) => payload,
  [ActionTypes.LOGOUT]: (payload: any) => payload,
});
