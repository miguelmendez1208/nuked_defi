import { useTheme } from '../theme-provider';  // Adjusted import to use your theme-provider
import Link from 'next/link';  // Imported Link from next/link for navigation

import '../styling/Header.css';
import AppLogo from '../assets/ExampleLogo';  // Adjusted import for SVG as a component


import SettingsButton from './SettingsButton';
import { useMediaQuery } from 'react-responsive';

interface HeaderProps {
  className?: string;
}
//maybe client function?
function Header(props: HeaderProps) {
  const state = useTheme();  // Used useTheme hook to access state
  const isMobile = useMediaQuery({ maxWidth: 900});  
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
        {isMobile ? (
          <div className="header-left h-100">
            <div className="header-logo-container w-100" key={'header-route-button'}>
              <Link href="/">  {/* Used Link from next/link for navigation */}
                    <div className="app-logo fill-svg-primary h-100">
                  <AppLogo/>
                  </div>

              </Link>
            </div>
          </div>
        ) : (
            <div className="header-mobile-title-container w-100">
              <h3 className="header-mobile-title">
                <p> I dont really know whats supposed to go here</p>
              </h3>
            </div>
          )}
        {isMobile && (
         <div className="header-center w-100">
            <div className="header-center-positioning">
              <div className="display-flex-row display-flex-align-start w-100 gap-common horizontal-center"></div>
            </div>
          </div>
        )}
        {isMobile ? (
          <>
            <div className="header-right gap-common">
              <SettingsButton />
              </div>
            </>
        ) : (
              <SettingsButton />
        )}
    </div>
    </div>
  );
}
// the second settings Button needs to be replaced with hamburger Menu
export default Header;