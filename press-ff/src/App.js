import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { callBackendAPI, getMyData, sendMyData } from './serverUtils/utils';
import { writeData } from './features/dataSlice';
import { Main } from './Components/Main';
import { Header } from './Components/Header'
import { Anthropometry } from './Components/Anthropometry';
import { Sport } from './Components/Sport';
import './App.css';

const router = createBrowserRouter([
  {
    path: '/',
    element:
    <>
      <Header />
      <Main />
    </>
  },
  {
    path: '/anthropometry',
    element:
    <>
      <Header />
      <Anthropometry />
    </>
  },
  {
    path: '/sport',
    element:
    <>
      <Header />
      <Sport />
    </>
  },
]);

function App() {
  const [state, setState] = useState(null)
  const [myData, setMyData] = useState(null)

  // const myReduxData = useSelector((state) => state.myData)
  const dispatch = useDispatch()

  useEffect(() => {
    callBackendAPI()
    .then(res => setState(res.express))
    .catch(err => console.log(err))

    getMyData()
    .then(res => {
      setMyData(res)
      dispatch(writeData(res))
    })
    .catch(err => console.log(err))
  }, [dispatch])

  return (
    <div className="App">
      <RouterProvider router={router} />
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
