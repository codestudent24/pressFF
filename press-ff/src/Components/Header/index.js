import React from "react";
import { Link } from "react-router-dom";
import logo from '../../assets/images/pressff-logo.png'
import './style.css'

export const Header = () => {
  return (
    <header className="header">
      <img src={logo} alt="logo" />
      <nav>
        <Link to="/">На главную</Link>
        <Link to="/anthropometry">Антропометрия</Link>
        <a href="/">Спортивные показатели</a>
        <a href="/">Журнал</a>
        <a href="/">О себе</a>
      </nav>
    </header>
  )
}