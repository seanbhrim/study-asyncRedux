import {takeLatest} from 'redux-saga/effects'
import { handleBasicGetRequest, handleBasicPostRequest, sagaBasicGetRequest, sagaBasicPostRequest } from './sagaExamples/basic'

export function* appSaga(){
  yield takeLatest(sagaBasicGetRequest, handleBasicGetRequest)
  yield takeLatest(sagaBasicPostRequest, handleBasicPostRequest)
}

