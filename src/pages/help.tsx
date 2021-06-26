import React, { useContext, useEffect } from "react"
import { GetServerSideProps } from "next"
import Head from "next/head"
import styles from "../styles/pages/Help.module.css"
import { ThemeStyles } from "../components/ThemeStyles"
import { SettingsContext } from "../contexts/SettingsContext"

interface IHelpProps {
  colorTheme: string;
}

export default function Help(props: IHelpProps) {
  
  const { colorTheme, setColorTheme } = useContext(SettingsContext)

  useEffect(() => {
    setColorTheme(props.colorTheme)
  }, [props.colorTheme])

  return (
    <div className={styles.container}>
      <Head>
        <title>Ajuda | Foca!</title>
      </Head>

      <section>
        <h2>
          <i className="mdi mdi-help-circle-outline"></i>
          Ajuda
        </h2>
        <hr />

        <h3>Descrição</h3>

        <p>
          Este APP lhe ajudará, de uma forma simples, a manter ciclos de
          pequenos exercícios físicos entre atividades que geralmente mantemos
          repetitivas, como atividades no computador por longos períodos.
        </p>

        <p>
          É utilizada a técnica Pomodoro, que consiste em dividirmos nossas
          atividades em 25 minutos, alternadas por pequenos intervalos para
          descanso, geralmente 5 minutos
        </p>

        <p>
          👉 Este APP foi desenvolvido e aprimorado no evento online Next Level
          Week #4, da{" "}
          <a href="https://rocketseat.com.br/" target="_blank">
            RocketSeat
          </a>
        </p>

        <h3>Como Usar</h3>

        <ol>
          <li>
            Para iniciar um ciclo de atividade, selecione "Iniciar ciclo". Com
            isso, você terá 25 minutos para desenvolver sua atividade, antes de
            dar uma pausa:
            <img src="/screenshots/1.jpg" alt="Página 1" />
          </li>

          <br />

          <li>
            Ao final do ciclo, no lado direito, é mostrada uma atividade física
            aleatória para prática. Após praticá-la (ou não), selecione uma das
            duas opções correspondentes:
            <img src="/screenshots/3.jpg" alt="Página 2" />
          </li>

          <br />

          <li>
            Conforme seu avanço, você irá subir de nível:
            <img src="/screenshots/4.jpg" alt="Página 3" />
          </li>
        </ol>
      </section>

      <section>
        <h2>
          <i className="mdi mdi-information-outline"></i>
          Sobre
        </h2>
        <hr />

        <img src="/icons/logo/logo-larga.png" alt="" />

        <p>
          App desenvolvido no evento Next Level Week #4 da{" "}
          <a href="https://rocketseat.com.br/" target="_blank">
            RocketSeat
          </a>
        </p>

        <br />

        <div className={styles.profile}>
          <div>
            <img
              src="https://github.com/PauloHNMorais.png"
              alt="Paulo H N Morais"
            />
          </div>
          <div>
            <strong>Paulo H N Morais</strong>
            <span>Desenvolvedor Full-Stack | React | React Native</span>
            <a
              href="https://paulohnmorais-portfolio.vercel.app/"
              target="_blank"
            >
              Visite meu Portfólio
            </a>
          </div>
        </div>
      </section>
      <ThemeStyles colorTheme={colorTheme} />
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async(ctx) => {
  const { colorTheme } = ctx.req.cookies
  
  return {
    props: {
      colorTheme: colorTheme || ""
    }
  }
}