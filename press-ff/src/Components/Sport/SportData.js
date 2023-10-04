import React from "react";
import { useDispatch } from "react-redux";
import { deleteSportData } from "../../features/dataSlice";

export const SportData = ({sportName, sportArray}) => {
  const dispatch = useDispatch()

  return (
    <ul className="table">
      <li className="item">
        <div className="cell">№</div>
        <div className="cell">Дата</div>
        <div className="cell">Вес</div>
        <div className="cell">Количество</div>
        <div className="cell"></div>
      </li>
      {sportArray.map((stamp, index) => {
        return (
          <li key={index} className="item">
            <div className="cell">{index + 1}</div>
            <div className="cell">{stamp.date}</div>
            <div className="cell">{stamp.weight}</div>
            <div className="cell">{stamp.count}</div>
            <div className="cell" onClick={() => {
          dispatch(deleteSportData({
            sport: sportName,
            date: stamp.date,
            weight: stamp.weight,
            count: stamp.count,
            sendData: true}))
        }}>x</div>
          </li>
        )
      })}
    </ul>
  )
}