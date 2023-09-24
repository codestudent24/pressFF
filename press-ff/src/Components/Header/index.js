import React from "react";
import logo from '../../assets/images/pressff-logo.png'
import './style.css'

export const Header = () => {
  return (
    <header className="header">
      <img src={logo} alt="logo" />
      <nav>
        <a href="/">Антропометрия</a>
        <a href="/">Спортивные показатели</a>
        <a href="/">Журнал</a>
        <a href="/">О себе</a>
      </nav>
    </header>
  )
}