//"use client"
//This definitely should just be a client function, but why does it work? I should definitely just move all the themeing back
//up to the theme-provider context
import Link from 'next/link';  // Imported Link from next/link for navigation
import '../styling/Header.css';
import AppLogo from '../assets/ExampleLogo';  // Adjusted import for SVG as a component
import SettingsButton from './SettingsButton';
import HamburgerMenu from './HamburgerMenu';
import ConnectButton from './ConnectButton';
import { useTheme } from '../theme-provider';

interface HeaderProps {
  className?: string;
}
//maybe client function?
function Header(props: HeaderProps) {
  const state = useTheme(); // Use the useTheme hook to get the theme state
  const isMobile = state?.isMobile ?? false; // Use nullish coalescing to default to false if state is null
  const { className = '' } = props;

  return (
    <div
      className={
        'header padding-full vertical-center horizontal-center gap-common' +
        (isMobile ? ' mobile' : '') +
        ' top-sticky ' +
        className
      }
    >
      <div className="header-container display-flex-center">
        {!isMobile ? (
          <div className="header-left h-100">
            <div className="header-logo-container w-100" key={'header-route-button'}>
              <Link href="/">
                <div className="app-logo fill-svg-primary h-100">
                  <AppLogo />
                </div>

              </Link>
            </div>
          </div>
        ) : (
          <div className="header-mobile-title-container w-100">
            <h3 className="header-mobile-title">
              <p> INSERT LINKS HERE LATER </p>
            </h3>
          </div>
        )}
        {!isMobile && (
          <div className="header-center w-100">
            <div className="header-center-positioning">
              <div className="display-flex-row display-flex-align-start w-100 gap-common horizontal-center"></div>
            </div>
          </div>
        )}
        {!isMobile ? (
          <>
            <div className="header-right gap-common">
              <SettingsButton />
              <div className="align-self-center">
                <ConnectButton/>
              </div>
            </div>
          </>
        ) : (
          <HamburgerMenu></HamburgerMenu>
        )}
      </div>
    </div>
  );
}
// the second settings Button needs to be replaced with hamburger Menu
export default Header;