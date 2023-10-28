"use client"
import Button from './Button';

import Link from 'next/link'

import '../styling/SideMenu.css';

import { useMediaQuery } from 'react-responsive';
import { usePathname } from 'next/navigation'
function SideMenu() {
  //parameterize later

  const isMobile = useMediaQuery({ maxWidth: 900 });
  const pathname = usePathname()
  //guardclause
  if (isMobile) {
    return (<></>);
  }
  //TODO: combine into one guard clause
  if (pathname === "/"){
    return(<></>);
  }

  //hard coding links
  return (
    <div className="side-menu-wrapper padding-top-half padding-left padding-right">
      <div className={'side-menu left-sticky ' + (isMobile ? ' mobile' : '')}>
        <div className="h-100 display-flex-col">
          <div className="side-menu-top display-flex-col">
            <Link href = "/">
              Home
            </Link>
            <Link href = "/dashboard">
              Dashboard
            </Link>
          </div>
        </div>
      </div>
    </div>
  ); 
}

export default SideMenu;
