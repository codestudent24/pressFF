import React from "react";
import { useSelector } from "react-redux";
import { AnthropData } from "./AnthropData";
import './style.css';

export const Anthropometry = () => {
  const myData = useSelector((state) => state.myData)

  return (
    <div className="anthrop">
      <h1>Антропометрия</h1>
      <div className="info">
        <span className="info__name">Рост: </span>
        <span className="info__value">{myData.height}</span>
      </div>
      <AnthropData weightArray={myData.weight} height={myData.height} />
    </div>
  )
}