'use client'
import { useContext } from 'react';

import { useTheme, useThemeDispatch} from "../theme-provider";
import Button from './Button';
import Modal from './Modal';
import {
  saveTheme,
  saveHamburgerMenuPosition,
  saveAutoBrowserWallet,
} from "../Landfill/browser";

interface SettingsModalProps {
  className?: string;
}
//lets try to parameterize this 
const SettingsModal = (props: SettingsModalProps) => {

  const { className = '' } = props;
  const state = useTheme();
  const dispatch = useThemeDispatch();

  const setTheme = (theme: string) => {
    if (dispatch !== null && state !== null) {
      dispatch({ type: 'CHANGE_THEME', payload: theme });
      saveTheme(theme);
    } else {
      console.error('Dispatch or State context is null. Are you within a ThemeProvider?');
    }
  };
  //ugly method name
  const setClose = (open: boolean) => {
    if (dispatch !== null) {
      dispatch({ type: 'TOGGLE_SETTINGS' });  // This action type toggles the value of isSettingsOpen
    } else {
      console.error('Dispatch context is null. Are you within a ThemeProvider?');
    }
  };

  return (
    <>
      {!state?.isSettingsOpen ? (
        <Modal
          title="Settings"
          handleClose={() => {
            setClose(false);
          }}
          className={className}
          classNameBody="padding-full"
        >
          <div className="margin-bottom">Select Theme</div>
          <div className="display-flex flex-flow-row-wrap">
            <Button
              text="Beach"
              onButtonClick={() => {
                setTheme('beach');
              }}
              selected={state?.theme === 'beach'}
              className="margin-right margin-bottom theme-button"
            />
            <Button
              text="Ink"
              onButtonClick={() => {
                setTheme('ink');
              }}
              selected={state?.theme === 'ink'}
              className="margin-right margin-bottom theme-button"
            />
            <Button
              text="Mint"
              onButtonClick={() => {
                setTheme('mint');
              }}
              selected={state?.theme === 'mint'}
              className="margin-right margin-bottom theme-button"
            />
          </div>
          <div className="display-flex flex-flow-row-wrap">
            <Button
              text="Tokyo"
              onButtonClick={() => {
                setTheme('tokyo');
              }}
              selected={state?.theme  === 'tokyo'}
              className="margin-right margin-bottom theme-button"
            />
            <Button
              text="BIOS"
              onButtonClick={() => {
                setTheme('bios');
              }}
              selected={state?.theme === 'bios'}
              className="theme-button margin-bottom"
            />
          </div>
          </Modal>
      ) : (
        <></>
      )}
    </>
  );
};

export default SettingsModal;
