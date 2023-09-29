import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { callBackendAPI, getMyData, sendMyData } from './serverUtils/utils';
import { writeData } from './features/dataSlice';
import { Main } from './Components/Main';
import { Header } from './Components/Header'
import './App.css';
import { Anthropometry } from './Components/Anthropometry';

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
