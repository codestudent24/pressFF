import React, {useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";
import './style.css'

const textFade = keyframes`
from {
  opacity: 0;
  transform: translateX(-10px);
}

to {
  opacity: 1;
  transform: translateX(0px);
}
`;

const Text = styled.p`
  animation: ${textFade} 1s ease-in forwards;
`;

const pressList = [
  'разработка сайта',
  'тренировки',
  'поставленные цели',
  'отслеживание результатов',
  'мотивация'
]

export const Main = () => {
  const [currentText, setCurrentText] = useState(pressList[0])

  useEffect(() => {
    let i = 0;
    setInterval(() => {
      i += 1;
      if (i >= pressList.length) i = 0;
      setCurrentText(pressList[i])
    }, 5000)
  }, [])

  return (
    <main className="main">
      <div className="ellipse-124"></div>
      <div className="ellipse-125"></div>
      <div className="container-flex">
        <div>
          <h1>Press FF: Frontend&Fitness</h1>
          <h2>Проект, в котором фронтенд-разработка<br />объединена co cпopтoм</h2>
          <Text><span>Press FF</span> это <span>{currentText}</span></Text>
        </div>
        <div>
          <h2>Место под графики</h2>
        </div>
      </div>
    </main>
  )
}