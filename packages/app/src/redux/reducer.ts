import { createReducer } from "@reduxjs/toolkit";
import { resetAppState, setAppData, setAppFailed, setAppLoading } from "./actions";
import initialAppState from "./state";

const appReducer = createReducer(initialAppState, builder => {
  builder
    .addCase(resetAppState, _ => initialAppState)
    .addCase(setAppData, (state, {payload}) => ({
      ...state,
      data: payload
    }))
    .addCase(setAppFailed, (state, {payload}) => ({
      ...state,
      failed: payload
    }))
    .addCase(setAppLoading, (state, {payload}) => ({
      ...state,
      loading: payload
    }))
})

export default appReducer;
