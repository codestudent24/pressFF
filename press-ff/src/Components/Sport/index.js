import React from "react";
import { useSelector } from "react-redux";
import benchPress from "../../assets/images/bench-press.jpg"
import pullUps from "../../assets/images/pull-ups.jpg"
import { AddSportData } from "./AddSportData";
import { SportData } from "./SportData";
import './style.css';

export const Sport = () => {
  const myData = useSelector((state) => state.myData)
  const sportData = myData.sport

  return (
    <div className="sport">
      <h1>Спортивные показатели</h1>
      <section>
        <div className="sport__info">
          <h1>Жим лёжа</h1>
          <SportData sportName="benchPress" sportArray={sportData.benchPress}/>
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
          <SportData sportName="pullUps" sportArray={sportData.pullUps}/>
        </div>
      </section>
      <AddSportData />
    </div>
  )
}