import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { callBackendAPI, getMyData, sendMyData } from './serverUtils/utils';
import { updateWeight, logData, writeData } from './features/dataSlice';
import { Header } from './Components/Header';
import './App.css';
import { Main } from './Components/Main';

function App() {
  const [state, setState] = useState(null)
  const [myData, setMyData] = useState(null)

  const myReduxData = useSelector((state) => state.myData)
  const dispatch = useDispatch()

  useEffect(() => {
    callBackendAPI()
    .then(res => setState(res.express))
    .catch(err => console.log(err))

    getMyData()
    .then(res => {
      setMyData(res)
      dispatch(writeData(res))
      dispatch(logData(res))
      console.log('From redux:', myReduxData)
    })
    .catch(err => console.log(err))
  }, [myReduxData, dispatch])

  return (
    <div className="App">
      <Header />
      <Main />
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
          dispatch(writeData())
        }}>
          Wright data
        </button>
        </>
      )}

    </div>
  );
}

export default App;
