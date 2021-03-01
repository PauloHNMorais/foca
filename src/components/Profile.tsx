import React, { useContext } from "react"
import { ChallengesContext } from "../contexts/ChallengeContext";
import styles from "../styles/components/Profile.module.css";

export function Profile() {

  const { level } = useContext(ChallengesContext)

  return (
    <div className={styles.profileContainer}>
      <img src="https://github.com/PauloHNMorais.png" alt="Paulo H N Morais" />

      <div>
        <strong>Paulo H N Morais</strong>
        <p> 
          <img src="icons/level.svg" alt="" />
          Level {level}
        </p>
      </div>
    </div>
  )
}