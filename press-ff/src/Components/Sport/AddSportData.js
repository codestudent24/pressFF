import React, { useEffect, useState } from "react";
import './style.css';
import { useDispatch } from "react-redux";
import { updateSportData } from "../../features/dataSlice";

const initialAddDataState = {
  sport: 'benchPress',
  date: new Date().toLocaleDateString(),
  weight: "100",
  count: 10
}

export const AddSportData = () => {
  const [addData, setAddData] = useState(false)
  const [addDataState, setAddDataState] = useState(initialAddDataState)
  const dispatch = useDispatch()

  useEffect(() => {
    console.log(addDataState)
  }, [addDataState])

  return (
    <>
      {!addData && (
        <button className="button" onClick={() => setAddData(true)}>Ввести новые данные</button>
      )}
      {addData && (
        <div className="item" style={{width: "fit-content", margin: "1rem auto"}}>
          <select
            className="cell"
            onChange={(event) => setAddDataState({...addDataState, sport: event.target.value})}
          >
            <option
              defaultChecked
              value={'benchPress'}
            >Жим лёжа</option>
            <option
              value={'pullUps'}
            >Подтягивания</option>
          </select>
          <input
            className="cell"
            type="date"
            placeholder="01.01.2023"
            onChange={(event) => setAddDataState({...addDataState, date: event.target.value})} />
          <input
            className="cell"
            type="text"
            placeholder="Вес"
            onChange={(event) => setAddDataState({...addDataState, weight: event.target.value})} />
          <input
            className="cell"
            type="text"
            placeholder="Количество"
            onChange={(event) => setAddDataState({...addDataState, count: event.target.value})} />
        </div>
      )}
      {addData && (
        <div className="button-wrapper">
          <button className="button" onClick={() => {
            setAddData(false)
            dispatch(updateSportData({...addDataState, sendData: true}))
          }}
          >
            Сохранить
          </button>
          <button className="button" onClick={() => {
            setAddData(false)
          }}
          >
            Отменить
          </button>
        </div>
      )}
    </>
  )
}