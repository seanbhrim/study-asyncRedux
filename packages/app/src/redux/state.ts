export interface IAppState {
  data: object;
  failed: boolean;
  loading: boolean;
}

const appState: IAppState = {
  data: {},
  failed: false,
  loading: false
}

export default appState;
