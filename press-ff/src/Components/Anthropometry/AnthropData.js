import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { deleteWeight, updateWeight } from "../../features/dataSlice";
import { calculateColor, calculateIndex } from "./utils";
import './style.css';

export const AnthropData = ({weightArray, height}) => {
  const [addData, setAddData] = useState(false)
  const [value, setValue] = useState("")
  const [date, setDate] = useState("")
  const dispatch = useDispatch()

  return (
    <>
      <ul className="table">
        <li className="item">
          <div className="cell">№</div>
          <div className="cell">Дата измерения</div>
          <div className="cell">Вес</div>
          <div className="cell">Индекс массы тела</div>
          <div className="cell"></div>
        </li>
        {weightArray.map((stamp, index) => {
          const weightIndex = calculateIndex(height, stamp.value)
          return (
            <li key={index} className="item">
              <div className="cell">{index + 1}</div>
              <div className="cell">{stamp.date}</div>
              <div className="cell">{stamp.value}</div>
              <div className="cell" style={calculateColor(weightIndex)}>{weightIndex}</div>
              <div className="cell" onClick={() => {
                dispatch(deleteWeight({date: stamp.date, value: stamp.value, sendData: true}))
              }}>x</div>
            </li>
          )
        })}
        {addData && (
          <li className="item">
            <div className="cell"></div>
            <input
              className="cell"
              type="date"
              placeholder="01.01.2023"
              onChange={(event) => setDate(event.target.value)} />
            <input
              className="cell"
              type="text"
              placeholder="80"
              onChange={(event) => setValue(event.target.value)} />
            <div className="cell"></div>
          </li>
        )}
      </ul>
      {!addData && (
        <button className="button" onClick={() => setAddData(true)}>Ввести новые данные</button>
      )}
      {addData && (
        <div className="button-wrapper">
          <button className="button" onClick={() => {
            dispatch(updateWeight({date, value, sendData: true}))
            setAddData(false)
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