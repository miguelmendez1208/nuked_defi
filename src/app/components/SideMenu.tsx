"use client"
import Button from './Button';

import Link from 'next/link'

import '../styling/SideMenu.css';

import { usePathname } from 'next/navigation'
import { useTheme } from '../theme-provider';
function SideMenu() {
  //parameterize later
  const state = useTheme(); // Use the useTheme hook to get the theme state
  const isMobile = state?.isMobile ?? false; // Use nullish coalescing to default to false if state is null
  const pathname = usePathname()
  //guardclause
  if (isMobile) {
    return (<></>);
  }
  //TODO: combine into one guard clause
  if (pathname === "/") {
    return (<></>);
  }

  //hard coding links
  return (
    <div className="side-menu-wrapper padding-top-half padding-left padding-right">
      <div className={'side-menu left-sticky ' + (isMobile ? ' mobile' : '')}>
        <div className="h-100 display-flex-col">
          <div className="side-menu-top display-flex-col">

            <span key='side-menu-route-button-1' className="margin-bottom">
              <Link href="/">
                <Button className="side-menu-button no-padding">
                  <span className="padding-top padding-bottom">Home</span>
                </Button>
              </Link>
            </span>

            <span key='side-menu-route-button-2' className="margin-bottom">
              <Link href="/dashboard">
                <Button className="side-menu-button no-padding">
                  <span className="padding-top padding-bottom">Dashboard</span>
                </Button>
              </Link>
            </span>

            <span key='side-menu-route-button-3' className="margin-bottom">
              <Link href="/testing">
                <Button className="side-menu-button no-padding">
                  <span className="padding-top padding-bottom">Testing</span>
                </Button>
              </Link>
            </span>
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default SideMenu;
