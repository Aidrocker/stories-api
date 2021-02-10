import { combineReducers } from 'redux';
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import { persistReducer, FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER, 
  persistStore} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import rootReducer from 'src/store/reducers/index';
import rootSaga from 'src/store/sagas/index';

const sagaMiddleware = createSagaMiddleware();

const persistConfig = {
  key: 'root',
  storage,
};
const reducers = combineReducers({
  auth: rootReducer.auth       
 });

const persistedReducer = persistReducer(persistConfig, reducers);
const middleware = [...getDefaultMiddleware({ thunk: false, 
  serializableCheck: {
    ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
  }}), sagaMiddleware] as const;


export default () => {
  const store = configureStore({
    reducer: persistedReducer,
    middleware,
    devTools: process.env.NODE_ENV !== 'production',
  });
  // let persist = persistStore(store);
  sagaMiddleware.run(rootSaga);
  
  return {
    store
  };
}
export type RootState = ReturnType<typeof reducers>