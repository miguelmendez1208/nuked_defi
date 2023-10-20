import { useContext } from 'react';
import { Context } from '../../Store';
import Button from './../Button';
import Modal from './Modal';
import {
  saveTheme,
  saveHamburgerMenuPosition,
  saveAutoBrowserWallet,
} from '../../functions/browser';

interface SettingsModalProps {
  className?: string;
}

const SettingsModal = (props: SettingsModalProps) => {
  const [state, dispatch]: any = useContext(Context);
  const { className = '' } = props;

  const setTheme = (theme: string) => {
    dispatch({ type: 'theme', content: theme });
    saveTheme(theme);
  };
  const setMenuPosition = (position: string) => {
    dispatch({ type: 'hamburgerMenuPosition', content: position });
    saveHamburgerMenuPosition(position);
  };
  const setAutoBrowserWallet = (setting: boolean) => {
    dispatch({ type: 'autoBrowserWallet', content: setting });
    saveAutoBrowserWallet(setting);
  };

  return (
    <>
      {state.isSettingsOpen ? (
        <Modal
          title="Settings"
          handleClose={() => {
            dispatch({ type: 'isSettingsOpen', content: false });
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
              selected={state.theme === 'beach'}
              className="margin-right margin-bottom theme-button"
            />
            <Button
              text="Ink"
              onButtonClick={() => {
                setTheme('ink');
              }}
              selected={state.theme === 'ink'}
              className="margin-right margin-bottom theme-button"
            />
            <Button
              text="Mint"
              onButtonClick={() => {
                setTheme('mint');
              }}
              selected={state.theme === 'mint'}
              className="margin-right margin-bottom theme-button"
            />
          </div>
          <div className="display-flex flex-flow-row-wrap">
            <Button
              text="Tokyo"
              onButtonClick={() => {
                setTheme('tokyo');
              }}
              selected={state.theme === 'tokyo'}
              className="margin-right margin-bottom theme-button"
            />
            <Button
              text="BIOS"
              onButtonClick={() => {
                setTheme('bios');
              }}
              selected={state.theme === 'bios'}
              className="theme-button margin-bottom"
            />
          </div>
          <div className="margin-bottom padding-top">Hamburger Menu Position (Mobile Only)</div>
          <div className="display-flex flex-flow-row-wrap">
            <Button
              text="Left"
              onButtonClick={() => {
                setMenuPosition('left');
              }}
              selected={state.hamburgerMenuPosition === 'left'}
              className={
                'margin-right theme-button border-full border-color-light ' +
                (state.hamburgerMenuPosition === 'left' ? ' inverted-palette-box' : '')
              }
            />
            <Button
              text="Right"
              onButtonClick={() => {
                setMenuPosition('right');
              }}
              selected={state.hamburgerMenuPosition === 'right'}
              className={
                'margin-right theme-button border-full border-color-light ' +
                (state.hamburgerMenuPosition === 'right' ? ' inverted-palette-box' : '')
              }
            />
          </div>
          <div className="margin-bottom padding-top">Automatically Connect Browser Wallet</div>
          <div className="display-flex flex-flow-row-wrap">
            <Button
              text="Off"
              onButtonClick={() => {
                setAutoBrowserWallet(false);
              }}
              selected={!state.autoBrowserWallet}
              className={
                'margin-right theme-button border-full border-color-light ' +
                (!state.autoBrowserWallet ? ' inverted-palette-box' : '')
              }
            />
            <Button
              text="On"
              onButtonClick={() => {
                setAutoBrowserWallet(true);
              }}
              selected={state.autoBrowserWallet}
              className={
                'margin-right theme-button border-full border-color-light ' +
                (state.autoBrowserWallet ? ' inverted-palette-box' : '')
              }
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
