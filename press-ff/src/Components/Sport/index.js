import React, { useState } from "react";
import { useSelector } from "react-redux";
import benchPress from "../../assets/images/bench-press.jpg"
import pullUps from "../../assets/images/pull-ups.jpg"
import './style.css';

export const Sport = () => {
  const myData = useSelector((state) => state.myData)
  const sportData = myData.sport
  const [addData, setAddData] = useState(false)

  return (
    <div className="sport">
      <h1>Спортивные показатели</h1>
      <section>
        <div className="sport__info">
          <h1>Жим лёжа</h1>
          <ul className="table">
            <li className="item">
              <div className="cell">№</div>
              <div className="cell">Дата</div>
              <div className="cell">Вес</div>
              <div className="cell">Количество</div>
            </li>
            {sportData.benchPress.map((stamp, index) => {
              return (
                <li key={index} className="item">
                  <div className="cell">{index + 1}</div>
                  <div className="cell">{stamp.date}</div>
                  <div className="cell">{stamp.weight}</div>
                  <div className="cell">{stamp.count}</div>
                </li>
              )
            })}
          </ul>
        </div>
        <div className="sport__image">
          <img loading="lazy" src={benchPress} alt="bench press" />
        </div>
      </section>
      <section>
        <div className="sport__image">
          <img loading="lazy" src={pullUps} alt="pull ups" />
        </div>
        <div className="sport__info">
          <h1>Подтягивания</h1>
          <ul className="table">
            <li className="item">
              <div className="cell">№</div>
              <div className="cell">Дата</div>
              <div className="cell">Вес</div>
              <div className="cell">Количество</div>
            </li>
            {sportData.pullUps.map((stamp, index) => {
              return (
                <li key={index} className="item">
                  <div className="cell">{index + 1}</div>
                  <div className="cell">{stamp.date}</div>
                  <div className="cell">{stamp.weight}</div>
                  <div className="cell">{stamp.count}</div>
                </li>
              )
            })}
          </ul>
        </div>
      </section>
      {!addData && (
        <button className="button" onClick={() => setAddData(true)}>Ввести новые данные</button>
      )}
      {addData && (
        <div className="item" style={{width: "50%", margin: "1rem auto"}}>
          <select className="cell">
            <option defaultChecked>Жим лёжа</option>
            <option>Подтягивания</option>
          </select>
          <input className="cell" type="date" placeholder="01.01.2023"></input>
          <input className="cell" type="text" placeholder="Вес"></input>
          <input className="cell" type="text" placeholder="Количество"></input>
        </div>
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