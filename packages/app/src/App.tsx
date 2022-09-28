import React, { useCallback } from 'react';
import { useAppDispatch } from './redux';
import { sagaBasicGetRequest, sagaBasicPostRequest } from './redux/sagaExamples/basic';
import { useAppState } from './redux/selector';

const App = () => {
  const dispatch = useAppDispatch();
  const {data} = useAppState()

  const handleHello = useCallback(() => dispatch(sagaBasicGetRequest()), [dispatch])
  const handleEcho = useCallback(() => dispatch(sagaBasicPostRequest('Hah')), [dispatch])

  return (
    <div>
      <button
        onClick={handleHello}>
        Hello
      </button>
      <button
        onClick={handleEcho}>
        Echo
      </button>
      {JSON.stringify(data)}
    </div>
  )
}

export default App;
