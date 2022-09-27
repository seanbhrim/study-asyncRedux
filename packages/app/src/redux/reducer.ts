import { createReducer } from "@reduxjs/toolkit";
import { setData } from "./actions";
import initialAppState from "./state";

const appReducer = createReducer(initialAppState, builder => {
  builder.addCase(setData, state => ({
    ...state
  }))
})

export default appReducer;
