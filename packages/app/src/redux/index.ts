import { configureStore } from '@reduxjs/toolkit';
import {useDispatch} from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import { all } from 'redux-saga/effects';
import appReducer from './reducer';
import { appSaga } from './saga';

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: {
    app: appReducer
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat([sagaMiddleware])
})

function* rootSaga(){
  yield all([appSaga()])
}
sagaMiddleware.run(rootSaga)

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
