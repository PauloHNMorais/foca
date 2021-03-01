import React from "react"

const baseTheme = {
  red: "#EE6C4D",
  green: "#5BED4E",
  blue: "#4E5BED",
  blueDark: "#2F378E",
  blueTwitter: "#2AA9E0",
  white: "#FFF",
  background: "#F4F9F9",
  text: "#999",
  textHighlight: "#98C1D9",
  title: "#293241",
  grayLine: "#DCDDE0",
  backgroundOpacity: "rgba(255, 255, 255, 0.8)"
}


const theme = {
  light: {
    ...baseTheme,
  },
  dark: {
    ...baseTheme,
    red: "#AD4E39",
    green: "#41AA38",
    blue: "#3942AD",
    blueDark: "#1A1F4C",
    white: "#111",
    background: "#080808",
    text: "#666666",
    textHighlight: "#B3B9FF",
    title: "#414F66",
    grayLine: "#262626",
    backgroundOpacity: "rgba(0, 0, 0, 0.8)"
  },
  pink: {
    ...baseTheme,
    white: "#FFF7FD",
    background: "#E5CDC8aa",
    text: "#666666",
    textHighlight: "#DB5ABA",
    title: "#C455A8",
    grayLine: "#FFF7FD",
    backgroundOpacity: "rgba(255, 255, 255, 0.8)",
    blue: "#C455A8",
  },
  rocketseat: {
    red: "#CC5555",
    green: "#69CC55",
    blue: "#577BD1",
    blueDark: "#3F5996",
    blueTwitter: "#2AA9E0",
    white: "#FFF",
    background: "#F2F3F5",
    text: "#AAAAAA",
    textHighlight: "#577BD1",
    title: "#2E384D",
    grayLine: "#DCDDE0",
    backgroundOpacity: "rgba(255, 255, 255, 0.8)"
  }
}

export function ThemeStyles({ colorTheme = "light" }) {
  return (
    <style jsx global>{`
      :root {
        --white: ${theme[colorTheme].white};
        --background: ${theme[colorTheme].background};
        --gray-line: ${theme[colorTheme].grayLine};
        --text: ${theme[colorTheme].text};
        --text-highlight: ${theme[colorTheme].textHighlight};
        --title: ${theme[colorTheme].title};
        --red: ${theme[colorTheme].red};
        --green: ${theme[colorTheme].green};
        --blue: ${theme[colorTheme].blue};
        --blue-dark: ${theme[colorTheme].blueDark};
        --blue-twitter: ${theme[colorTheme].blueTwitter};
        --background-opacity: ${theme[colorTheme].backgroundOpacity};
      }        
      
      body {
        background: var(--background);
        color: var(--text);
      }
    `}</style>
  )
}