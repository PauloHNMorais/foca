import { GetServerSideProps } from "next";
import React, { useContext, useEffect } from "react"
import { ThemeStyles } from "../components/ThemeStyles";
import { SettingsContext, SettingsProvider } from "../contexts/SettingsContext";
import styles from "../styles/pages/Settings.module.css";
import Head from "next/head";

interface ISettingsProps {
  colorTheme: string;
}


export default function Settings(props: ISettingsProps) {

  const { colorTheme, setColorTheme } = useContext(SettingsContext)

  useEffect(() => {
    setColorTheme(props.colorTheme)
  }, [props.colorTheme])

  function handleThemeChange(e) {
    setColorTheme(e.target.value)
  }
  
  return <>
    <div className={styles.container}>
      <Head>
        <title>Configurações | Foca!</title>
      </Head>
      <section>
        <h2>
          <i className="mdi mdi-cog-outline"></i>
          Configurações
        </h2>
        <hr/> 
        <br/>
        <form action="">
          <label htmlFor="theme">Tema</label> 
          <br/>        
          <select className={styles.formControl} name="theme" id="theme" value={colorTheme} onChange={handleThemeChange}>
            <option value="light">Claro</option>
            <option value="dark">Escuro</option>
          </select>
        </form>
      </section>      
    </div>
    <ThemeStyles colorTheme={colorTheme} />  
  </>
}

export const getServerSideProps: GetServerSideProps = async(ctx) => {
  const { colorTheme = "light" } = ctx.req.cookies
  
  return {
    props: {
      colorTheme
    }
  }
}