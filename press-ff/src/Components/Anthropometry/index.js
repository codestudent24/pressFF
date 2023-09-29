import React, { useState } from "react";
import { useSelector } from "react-redux";
import './style.css';

const calculateIndex = (height, weight) => {
  const myHeight = Number(height) / 100
  const myWeight = Number(weight)

  return (myWeight / (myHeight * myHeight)).toFixed(2)
}

const calculateColor = (value) => {
  if (value < 16) return {color: "#6699cc"}
  if (value < 18.5) return {color: "#339966"}
  if (value < 25) return {color: "#33cc66"}
  if (value < 30) return {color: "#00cc00"}
  if (value < 35) return {color: "#ff6600"}
  if (value < 40) return {color: "#ff3300"}
  return {color: "#FF0000"}
}

export const Anthropometry = () => {
  const myData = useSelector((state) => state.myData)
  const [addData, setAddData] = useState(false)

  return (
    <div className="anthrop">
      <h1>Антропометрия</h1>
      <div className="info">
        <span className="info__name">Рост: </span>
        <span className="info__value">{myData.height}</span>
      </div>
      <ul className="table">
        <li className="item">
          <div className="cell">№</div>
          <div className="cell">Дата измерения</div>
          <div className="cell">Вес</div>
          <div className="cell">Индекс массы тела</div>
        </li>
        {myData.weight.map((stamp, index) => {
          const weightIndex = calculateIndex(myData.height, stamp.value)
          return (
            <li key={index} className="item">
              <div className="cell">{index + 1}</div>
              <div className="cell">{stamp.date}</div>
              <div className="cell">{stamp.value}</div>
              <div className="cell" style={calculateColor(weightIndex)}>{weightIndex}</div>
            </li>
          )
        })}
        {addData && (
          <li className="item">
            <div className="cell"></div>
            <input className="cell" type="date" placeholder="01.01.2023"></input>
            <input className="cell" type="text" placeholder="80"></input>
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
    </div>
  )
}