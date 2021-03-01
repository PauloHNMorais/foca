import React, { useState, useEffect, useContext } from "react"
import { ChallengesContext } from "../contexts/ChallengeContext"
import styles from "../styles/components/Countdown.module.css"

import { CountdownContext } from "../contexts/CountdownContext"

export function Countdown() {

  const { 
    minutes, 
    seconds, 
    hasFinished, 
    isActive,
    resetCountdown, 
    startCountdown,  
  } = useContext(CountdownContext)  

  const [minuteLeft, minuteRight] = String(minutes).padStart(2, "0").split("")
  const [secondLeft, secondRight] = String(seconds).padStart(2, "0").split("")
  
  return (
    <div>
      <div className={styles.countdownContainer}>
        <div>
          <span>{minuteLeft}</span> 
          <span>{minuteRight}</span>
        </div>
        <span>:</span>
        <div>
          <span>{secondLeft}</span>
          <span>{secondRight}</span>
        </div>
      </div>

      {hasFinished ? (
        <button disabled className={styles.countdownButton}>
          Ciclo terminado
        </button>
      ) : isActive ? (
        <button type="button" 
          className={`${styles.countdownButton} ${styles.countdownButtonActive}`} 
          onClick={resetCountdown}
        >
          <i className="mdi mdi-close"></i>
          Abandonar ciclo
        </button>
      ) : (
        <button type="button" className={styles.countdownButton} onClick={startCountdown}>
          <i className="mdi mdi-play"></i>
          Iniciar um ciclo
        </button>
      )}
    </div>
  )
}