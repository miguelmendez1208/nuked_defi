"use client";
import { useState, useContext } from 'react';
import HamburgerIcon from '../assets/icons/HamburgerIcon';
import Link from 'next/link';
import Button from './Button';
import ExampleLogo from '../assets/ExampleLogo';

import '../styling/HamburgerMenu.css';
import SettingsButton from './SettingsButton';
import ConnectButton from './ConnectButton';

export default function HamburgerMenu() {

  const [navbarOpen, setNavbarOpen] = useState(false);

  const handleToggle = () => {
    setNavbarOpen(!navbarOpen);
  };
  const closeMenu = () => {
    setNavbarOpen(false);
  };

  return (
    <nav className="hamburger-menu">
      <Button
        className={`hamburger-btn -padded`}
        onButtonClick={handleToggle}
      >
        <div className="hamburger-button-icon">
        <HamburgerIcon/></div>
      </Button>
      <div
        className={`hamburger-overlay ${
          navbarOpen ? ' show-menu' : ''
        }`}
        onClick={closeMenu}
      />
      <div
        className={`hamburger-panel border-clear ${
          navbarOpen ? ' show-menu' : ''
        }`}
      >
        <div className="w-100 h-100 display-flex">
          <div className="hamburger-wrapper display-flex-col flex-grow-1 padding-full">
            <div className="hamburger-content display-flex gap-common">
              <Link
                href="/"
                className="w-100 padding-bottom horizontal-center"
                onClick={closeMenu}
              >
                <div className="hamburger-panel-header w-100 fill-svg-primary">
                <ExampleLogo/>
                </div>
              </Link>
        
            </div>
            <div className="hamburger-panel-footer gap-common">
              <div className="hamburger-panel-footer-right display-flex-end flex-grow-1">
                <SettingsButton />
                <ConnectButton/>
              </div>
            </div>
            <div className="warning-gap padding-bottom" />
          </div>
        </div>
      </div>
    </nav>
  );
}
