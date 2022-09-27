export interface IAppState {
  data: object;
  loading: boolean;
}

const appState: IAppState = {
  data: {text: 'Hello World'},
  loading: false
}

export default appState;
