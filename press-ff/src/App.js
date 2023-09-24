import React, { useState, useEffect } from 'react'
import { callBackendAPI, getMyData, sendMyData } from './serverUtils/utils';
import { Header } from './Components/Header';
import './App.css';

function App() {
  const [state, setState] = useState(null)
  const [myData, setMyData] = useState(null)

  useEffect(() => {
    callBackendAPI()
    .then(res => setState(res.express))
    .catch(err => console.log(err))

    getMyData()
    .then(res => setMyData(res))
    .catch(err => console.log(err))
  }, [])

  return (
    <div className="App">
      <Header />
      <div>
        {state}
      </div>

      <br />

      {myData && (
        <>
        <div>
          <span>{'Welcome, '}</span>{myData.name}!
        </div>

        <button onClick={() => {
          sendMyData(myData)
        }}>
          Wright data
        </button>
        </>
      )}

    </div>
  );
}

export default App;
