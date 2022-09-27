import React from 'react';
import { getSlowResponse } from './api';
import { useAppState } from './redux/selector';

const App = () => {
  const {data} = useAppState()

  const handlePress = async () => {
    try {
      const {data} = await getSlowResponse()

      console.log(data)

    } catch (err) {
      console.log(err)
    }
  }

  return (
    <div>
      <button
        onClick={handlePress}>
        Press
      </button>
      {JSON.stringify(data)}
    </div>
  )
}

export default App;
