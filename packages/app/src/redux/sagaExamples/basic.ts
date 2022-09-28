import { createAction } from "@reduxjs/toolkit";
import { call, put } from "redux-saga/effects";
import { getHello, postEcho } from "../../api";
import { setAppData, setAppFailed, setAppLoading } from "../actions";

// Basic GET request
export const sagaBasicGetRequest = createAction<undefined>('Saga//Basic GET')

export function* handleBasicGetRequest(){
  yield put(setAppLoading(true))
  
  try{
    const {data} = yield call(() => getHello())
    yield put(setAppData(data))

  }catch(err){
    yield put(setAppFailed(true))

  }
}

// Basic POST request
export const sagaBasicPostRequest = createAction<string>('Saga//Basic POST')

export function* handleBasicPostRequest(action: ReturnType<typeof sagaBasicPostRequest>){
  yield put(setAppLoading(true))
  
  try{
    const {data} = yield call(() => postEcho(action.payload))
    yield put(setAppData(data))

  }catch(err){
    yield put(setAppFailed(true))

  }
}
