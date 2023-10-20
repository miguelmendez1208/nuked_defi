import { useContext } from 'react';
import Button from './Button';
import '../styling/Button.css';
import CogIcon from '../assets/icons/CogIcon';
import { ThemeContext } from '../theme-provider';

interface ConnectWalletButtonProps {
  className?: string;
}

const SettingsButton = (props: ConnectWalletButtonProps) => {
  const theme = useContext(ThemeContext);
  const { className = '' } = props;

  return (
    <Button
      className={'settings-button icon-button ' + className}
    >
      <div className="svg-icon svg-shadow w-100">
      <CogIcon/>
      </div>
    </Button>
  );
};

export default SettingsButton;
