import React, { createContext, useContext, useState } from 'react'

import { themeNames } from '../styles/themes'

const ThemeStateContext = createContext()
const ThemeDispatchContext = createContext()

function ThemeProvider({ children }) {
  
  //  Load theme from localStorage if one has been set
  let storedTheme = JSON.parse(localStorage.getItem('theme'))

  //  Check theme against existing themes
  storedTheme = themeNames.find((theme) => (theme === storedTheme))
  
  //  Clean up if invalid storedTheme
  if (!storedTheme) localStorage.removeItem('theme')

  const [theme, setTheme] = useState(storedTheme ? storedTheme : 'default')

  return (
    <ThemeStateContext.Provider value={theme}>
      <ThemeDispatchContext.Provider value={setTheme}>
        {children}
      </ThemeDispatchContext.Provider>
    </ThemeStateContext.Provider>
  )
}

function useThemeState() {
  const context = useContext(ThemeStateContext)
  if (context === undefined) {
    throw new Error('useThemeState must be used within a ThemeProvider')
  }
  return context
}

function useThemeDispatch() {
  const context = useContext(ThemeDispatchContext)
  if (context === undefined) {
    throw new Error('useThemeDispatch must be used within a ThemeProvider')
  }
  return context
}

export { ThemeProvider as default, useThemeState, useThemeDispatch }
