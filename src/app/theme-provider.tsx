'use client'

import "./styling/App.css"

import { createContext, useContext, useReducer } from 'react'


const ThemeContext = createContext(null);
const ThemeDispatchContext = createContext(null);

export default function ThemeProvider({ children }:any) {
  const [theme, dispatch] = useReducer(themeReducer, initialTheme);

  return (
    <ThemeContext.Provider value={theme}>
      <ThemeDispatchContext.Provider value={dispatch}>
      <div data-theme= {theme} className ="App">
      {children}
      </div>
      </ThemeDispatchContext.Provider>
    </ThemeContext.Provider>
  );
}

//this function probably useless because we never just want to just read value
export function useTheme() {
  return useContext(ThemeContext);
}

export function useThemeDispatch() {
  return useContext(ThemeDispatchContext);
}

function themeReducer(theme, action) {
  switch (action.type) {
    case 'changed': {
      return "beach";
        }
    default: {
      throw Error('Unknown action: ' + action.type);
    }
  }
}

const initialTheme = "beach";


