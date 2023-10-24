'use client'

import "./styling/App.css"

import { createContext, useContext, useReducer } from 'react'
import GridWallet from "./Wallet-provider";

//wacky name but oh well
const initialTheme = {
  theme: "beach",
  isSettingsOpen: false,
  showDisclaimer: true
};

interface ThemeState {
  theme: string;
  isSettingsOpen: boolean;
  showDisclaimer: boolean;
}

interface ThemeAction {
  type: 'CHANGE_THEME' | 'TOGGLE_SETTINGS' | 'SHOW_DISCLAIMER';
  payload?: any;
}


// I should probably try if I could do this with just setters instead of using context and reduce
//but I dont know the best way to let the change state method be available everywhere
//this probably fine but I have no idea how it works tbh
const ThemeContext = createContext<ThemeState | null>(null);
const ThemeDispatchContext = createContext<React.Dispatch<ThemeAction> | null>(null);



export default function ThemeProvider({ children }: any) {
  const [state, dispatch] = useReducer(themeReducer, initialTheme);
  //this should be limited to only have context info no div class info
  return (
    <ThemeContext.Provider value={state}>
      <ThemeDispatchContext.Provider value={dispatch}>
        <div data-theme={state.theme} className="App">
          <GridWallet>
          {children}
          </GridWallet>
        </div>
      </ThemeDispatchContext.Provider>
    </ThemeContext.Provider>
  );
}

//custom hook to get context from wherever in the tree
export function useTheme() {
  return useContext(ThemeContext);
}
//this is a nice custom hook to change context from wherever in the tree.
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
    case 'SHOW_DISCLAIMER':
      return {
        ...state,
        showDisclaimer: !state.showDisclaimer,
      };
    default:
      throw Error('Unknown action: ' + action.type);
  }
}

