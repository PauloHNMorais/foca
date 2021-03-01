import { createContext, ReactNode, useContext, useEffect, useState } from "react"
import Cookies from "js-cookie"

interface SettingsContextData {
  colorTheme: string;
  toggleTheme: () => void;
  setColorTheme: (theme: string) => void;
}

interface SettingsProviderProps {
  children: ReactNode;
}

export const SettingsContext = createContext({} as SettingsContextData)

export function SettingsProvider({ children }: SettingsProviderProps) {
  const [colorTheme, setColorTheme] = useState("light")

  useEffect(() => {
    Cookies.set('colorTheme', colorTheme)
  }, [colorTheme])

  function toggleTheme() {
    const newTheme = colorTheme === "light" ? "dark" : "light"
    setColorTheme(newTheme)
  }

  return (
    <SettingsContext.Provider value={{
      colorTheme,
      toggleTheme,
      setColorTheme
    }}>
      {children}
    </SettingsContext.Provider>
  )
}