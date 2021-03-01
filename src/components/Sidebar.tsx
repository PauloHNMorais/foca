import React, { HtmlHTMLAttributes, LinkHTMLAttributes, useContext, useEffect, useState } from "react";
import { SettingsContext } from "../contexts/SettingsContext";
import style from "../styles/components/Sidebar.module.css"

export function Sidebar() {
  const { colorTheme, toggleTheme } = useContext(SettingsContext)

  return (
    <div>
      <div className={style.sidebarContainer}>
        <a href="/">
          <img src="icons/logo/logo-quadrada-cheia.png" alt=""/>
        </a>
        <Link href="/">
          <i className="mdi mdi-home-outline"></i>
        </Link>
        <Link href="/settings">
          <i className="mdi mdi-cog-outline"></i>
        </Link>
      </div>
    </div>
  )
}

function Link(props) {
  const [isActive, setIsActive] = useState(false)
  
  useEffect(() => {
    const url = window.location.pathname
    setIsActive(url === props.href)
  }, [])

  return (
    <a {...props} className={style[isActive ? "activeLink" : "inactiveLink"]}>
      {props.children}
    </a>
  )
}