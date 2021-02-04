import { all, put, call, takeLatest, take } from '@redux-saga/core/effects';
import api from 'src/helpers/sendsay';
import { AnyAction } from 'redux';
import { ActionTypes } from 'src/store/constants';
import { authenticateSuccess, authenticateFailure } from 'src/store/actions/auth';
import { RecentActorsOutlined } from '@material-ui/icons';

export function* authenticateCheckSaga() {
  try {
    yield api.sendsay.request({
      action: 'pong',
    });
  } catch (error) {
    if (error.id === 'error/auth/failed') {
      yield call(logoutSaga);
    }
  }
}

export function* authenticateSaga({ payload }: AnyAction) {
  
  try{
    const data = yield api.sendsay
    .login({
      login: payload.login,
      sublogin: payload.sublogin,
      password: payload.password,
    }).then(() => api.sendsay.session);

    yield put(authenticateSuccess({
          sessionKey: data,
          login: payload.login,
          sublogin: payload.sublogin,
        }))
    document.cookie = `sendsay_session=${api.sendsay.session}`;
  }catch(err){
    yield put(authenticateFailure())
    document.cookie = '';
    console.log('err', err);
  }
}

export function* logoutSaga() {
  yield put(authenticateFailure());
  document.cookie = '';
}

export default function* root() {
  yield all([
    takeLatest(ActionTypes.AUTHENTICATE, authenticateSaga),
    takeLatest(ActionTypes.AUTHENTICATE_CHECK, authenticateCheckSaga),
    takeLatest(ActionTypes.LOGOUT, logoutSaga),
  ]);
}
