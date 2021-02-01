import { combineReducers } from 'redux';
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import rootReducer from 'src/store/reducers/index';
import rootSaga from 'src/store/sagas/index';

const sagaMiddleware = createSagaMiddleware();
const persistConfig = {
  key: 'root',
  storage,
};

const reducer = combineReducers({
  auth: persistReducer(persistConfig, rootReducer.auth)
})
const middleware = [...getDefaultMiddleware({ thunk: false }), sagaMiddleware];


export default () => {
  const store = configureStore({
    reducer,
    middleware,
    devTools: process.env.NODE_ENV !== 'production',
  });
  // store.runSagaTask = () => {
     sagaMiddleware.run(rootSaga);
  // }
// store.sagaTask =
  // let persistor = persistStore(store.auth);


  // store.runSagaTask();
  return {
    store,
    // persistor,
  };
}
