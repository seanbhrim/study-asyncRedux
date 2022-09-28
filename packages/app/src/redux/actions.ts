import { createAction } from "@reduxjs/toolkit";

export const setAppData = createAction<object>('[App]: Set app data state')
export const setAppFailed = createAction<boolean>('[App]: Set app failed state')
export const setAppLoading = createAction<boolean>('[App]: Set app loading state')
export const resetAppState = createAction<undefined>('[App]: Reset to initial state')
