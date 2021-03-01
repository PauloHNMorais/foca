import { CompletedChallenges } from "../components/CompletedChallenges";
import { Countdown } from "../components/Countdown";
import { ExperienceBar } from "../components/ExperienceBar";
import { Profile } from "../components/Profile";
import styles from "../styles/pages/Home.module.css";

import Head from "next/head";
import { GetServerSideProps } from "next";
import { ChallengeBox } from "../components/ChallengeBox";
import { CountdownProvider } from "../contexts/CountdownContext";
import { ChallengesProvider } from "../contexts/ChallengeContext";
import { useContext, useEffect } from "react";
import { SettingsContext } from "../contexts/SettingsContext";
import { ThemeStyles } from "../components/ThemeStyles";

interface IHomeProps {
  level: number;
  challengesCompleted: number;
  currentExperience: number;
  colorTheme: string;
}

export default function Home(props: IHomeProps) {

  const { colorTheme, setColorTheme } = useContext(SettingsContext)

  useEffect(() => {
    setColorTheme(props.colorTheme)
  }, [props.colorTheme])

  return (
    <>
      <ChallengesProvider 
        level={props.level} 
        challengesCompleted={props.challengesCompleted}
        currentExperience={props.currentExperience}
      >
        <div className={styles.container}>
          <Head>
            <title>Início</title>
          </Head>

          <ExperienceBar />

          <CountdownProvider>
            <section>
              <div>
                <Profile />
                <CompletedChallenges />
                <Countdown />
              </div>
              <div>
                <ChallengeBox />
              </div>
            </section>
          </CountdownProvider>
        </div>
      </ChallengesProvider>    
      <ThemeStyles colorTheme={colorTheme} />  
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async(ctx) => {
  const { level, challengesCompleted, currentExperience, colorTheme } = ctx.req.cookies
  
  return {
    props: {
      level: Number(level),
      challengesCompleted: Number(challengesCompleted),
      currentExperience: Number(currentExperience),
      colorTheme: colorTheme || ""
    }
  }
}