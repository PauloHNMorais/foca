import { GetServerSideProps } from "next";
import React, { useContext, useEffect } from "react"
import { ThemeStyles } from "../components/ThemeStyles";
import { SettingsContext, SettingsProvider } from "../contexts/SettingsContext";
import styles from "../styles/pages/Settings.module.css";

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
      <section>
        <h2>
          <i className="mdi mdi-cog-outline"></i>
          Configurações
        </h2>
        <hr/>
        <form action="">
          <label htmlFor="theme">Tema</label> 
          <br/>        
          <select className={styles.formControl} name="theme" id="theme" value={colorTheme} onChange={handleThemeChange}>
            <option value="light">Claro</option>
            <option value="dark">Escuro</option>
          </select>
        </form>
      </section>

      <section>
        <h2>
          <i className="mdi mdi-information-outline"></i>
          Sobre
        </h2>
        <hr/>
        
        <img src="/icons/logo/logo-larga.png" alt=""/>

        <p>App desenvolvido no evento Next Level Week #4 da <a href="https://rocketseat.com.br/" target="_blank">RocketSeat</a></p>
        
        <br/>
                
        <div className={styles.profile}>
          <div>
            <img src="https://github.com/PauloHNMorais.png" alt="Paulo H N Morais"/>
          </div>
          <div>
            <strong>Paulo H N Morais</strong>
            <span>Desenvolvedor Full-Stack | React | React Native</span>
            <a href="https://paulo-h-n-morais.000webhostapp.com/" target="_blank">Visite meu Portfólio</a>
          </div>
        </div>
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