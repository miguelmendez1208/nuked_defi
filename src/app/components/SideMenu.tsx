"use client"
import Button from './Button';

import Link from 'next/link'

import '../styling/SideMenu.css';

import { useMediaQuery } from 'react-responsive';

function SideMenu() {
  //parameterize later

  const isMobile = useMediaQuery({ maxWidth: 900 });

  //guardclause
  if (isMobile) {
    return (<></>);
  }
  //gotta fill shit in here. idk what tho
  return (
    <div className="side-menu-wrapper padding-top-half padding-left padding-right">
      <div className={'side-menu left-sticky ' + (isMobile ? ' mobile' : '')}>
        <div className="h-100 display-flex-col">
          <div className="side-menu-top display-flex-col">
              FILL LATER
          </div>
        </div>
      </div>
    </div>
  ); 
}

export default SideMenu;
