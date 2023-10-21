'use client'

import "./styling/App.css"

import { createContext, useContext, useReducer } from 'react'


//wacky name but oh well
const initialTheme = {
  theme: "beach",
  isSettingsOpen: false,
};

interface ThemeState {
  theme: string;
  isSettingsOpen: boolean;
}

interface ThemeAction {
  type: 'CHANGE_THEME' | 'TOGGLE_SETTINGS';
  payload?: any;
}


// I should probably try if I could do this with just setters instead of using context and reduce
//but I dont know the best way to let the change state method be available everywhere
//this probably fine but I have no idea how it works tbh
const ThemeContext = createContext<ThemeState|null>(null);
const ThemeDispatchContext = createContext<React.Dispatch<ThemeAction> | null>(null);



export default function ThemeProvider({ children }:any) {
  const [state, dispatch] = useReducer(themeReducer, initialTheme);

  return (
    <ThemeContext.Provider value={state}>
      <ThemeDispatchContext.Provider value={dispatch}>
      <div data-theme= {state.theme} className ="App">
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

function themeReducer(state: ThemeState, action: ThemeAction): ThemeState {
  switch (action.type) {
    case 'CHANGE_THEME':
      return {
        ...state,
        theme: action.payload,
      };
    case 'TOGGLE_SETTINGS':
      return {
        ...state,
        isSettingsOpen: !state.isSettingsOpen,
      };
    default:
      throw Error('Unknown action: ' + action.type);
  }
}

