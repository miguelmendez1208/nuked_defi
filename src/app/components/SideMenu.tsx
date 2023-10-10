"use client"
import Button from './Button';

import Link from 'next/link'

import '../styling/SideMenu.css';

import { useMediaQuery } from 'react-responsive';

function SideMenu() {
  //parameterize later
  const landingPage = true
  const isMobile = useMediaQuery({maxWidth: 900});
  //unused so I just used random bs lol
  const getIcon = (id: string) => {
    //const foundRoute = getRouteFromId(id);
    const foundRoute = id;
    let FoundIcon: any | undefined = undefined;
    if (foundRoute !== undefined) {
      //FoundIcon = foundRoute.icon;
      FoundIcon = foundRoute;
    }
    if (FoundIcon !== undefined) {
      return <FoundIcon className="svg-icon fill-svg-primary margin-half padding-half" />;
    } else {
      return undefined;
    }
  };

  return !isMobile ? (
    landingPage ? (
      <div className="side-menu-wrapper padding-top-half padding-left padding-right">
        <div className={'side-menu left-sticky ' + (isMobile ? ' mobile' : '')}>
          <div className="h-100 display-flex-col">
            <div className="side-menu-top display-flex-col">

            </div>
          </div>
        </div>
      </div>
    ) : (
      <></>
    )
  ) : (
    <></>
  );
}

export default SideMenu;
