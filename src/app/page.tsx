"use client";
import Image from 'next/image'
import styles from './page.module.css'
import './globals.css'
import './styling/App.css';
import './styling/themes.css';
import './styling/Toast.css';
import SideMenu from './components/SideMenu';

import { useMediaQuery } from 'react-responsive';

import Link from 'next/link'


export default function Home() {
  const isMobile = useMediaQuery({ maxWidth: 900});
  
  return (
  <>
  <div className="home display-flex">
  <div className={'home-container display-flex-row' + (isMobile ? ' mobile' : '')}>
    <div className="home-left display-flex-col">
      <h1 className="margin-bottom font-secondary">Title Goes Here</h1>
      <div className="body padding-full padding-top-half">
      <p className="padding-top padding-bottom">  
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
        ex ercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
        dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </p>
      </div>
      <Link href ="/dashboard">Enter App </Link>
    </div>
    <div className="home-right display-flex">
      <pre className="disable-highlight">
        {!isMobile
          ? `....................................................................................................
....................................................................................................
....................................................................................................
....................................................................................................
....................................................................................................
............../,...&,#..&#..........................................................................
..............*(*.&&*&#//(..........................................................................
.............#*,,*,/*//**.................,,,,,***,*,,,,...................///*(//**///*............
.............%*/,/****,,...............*****//*//**/*/**,,,,..............****,***,..,,,,,..........
............((////**/***((*(/,,,....*,**//(///(((////////**,,,,.............//****,....,............
...........%%#(#%#%,*,*,*,,.......,/***/(((//(///(//////***,,.,,...........,...../,.................
...........,,,/,%/*,,***,*.......******//(/(((#%#////////*/,,,,.,..........,.,****,.....*...........
............****(*,,#*,/.........*,**/////(%%%&%#(////////**,,...*.........*.*,*,,,..,.,*...........
...............**(**,*..........**,,**////#&#/(/(//*///**,*,,,.............*..,,,,,.,,*,*...........
.................,..............,*,,**///(&/***//*//*,,**,*,,,.............*....,,,.,,..*...........
................,,**,...........****,,/.......*,,,,*.......................*.....,,.,.../...........
.................,.,............,***,*,.......,**(.*.........,,............*...,,*,...../.,.........
.................,.,.............,**,*,,,.....,/***.,.......***............*.....,......,.,.........
................,,..,............,**,*/**/,,&,*,,../.,,,,,,,/*.,...,.......*.....%,.......,.........
.............*,,,,..,,,*..........,,*,****..,**,....*,.,,.*.,,,....,.......*..*,,,........,.........
............***##,..**/(*,.........,,,,,,,.,,*,,..*..,,.,,,,,,,*...........*.*.,,/,..,.,............
.........,*,*****,..*,,*,,/////////(//*....**,****,.,**...,....,.,,,,,******..,,,,,.,.,.............
........//*,,*,*,*,,*,,***/((((#((((((,,,,.**,,/*/*/,*,,.....*.,..........,*.,,//*,.**,,,,./*.......
......(///(/,,,,.,,..*,***,,******//*//,,**/*/.,,.........,.*,............,*.**,/(*,.**,,,.///......
....,#(((##((/,.***.,*%&@*,,,*/####(##(,,,****,,,,*.,,.,.....,.......*/((((***(#*//,,,,,,/,.,,//....
..,(#%######%##%##%###%%&%%#%%%%##%##%##,,,*,*,*%//***,,,.......(%%##(#########%##/*,,*(#(#####(#(..
.((%%%%&%&&%%&%&&%&#&%%%&&&&&&&%#&%&&%%%%&%%(,,////*,*,,...../%%#%%%%%%%%%%%%%%%%#%%%%%&%#%%%##%##((
%%#%&&&%&&%&&%&&&&&&&&&@&&&&&&&&%%&%&&&&@&&%%%&%%%(...,,*#&%&%%%&&&&&%%&%&&&%&&&&&&&&&%&%#%&%&%%###(
#&%&&&&&@&&#&%&@&&&&@&@@@&@%@@@&&&%&&&&&@@&@@&@&&&&&@&&%&&@@&@%@&@&&&&%&&%%&&&&&&%&&&&&&&%&&&%&&&#&%
((/(((((((#(((#((((/((((((((((((((((((((((((((((/(/((((/(//(((((/((((((((((/(///(((//((((////(//(///
((/(/((((((/((((//(((((///(((((/(((/(((((((((((((((((((((((#(((//((((((((((((((((((((/((((/(/(/((((/
((((///((//((//(/(/((/(//(//(((///////(((((((/((/(((((((/((/(/((//(((/(/(((((///(((((((((/((/(*(////`
          : `............................................................
............................................................
............................................................
.........(..,.&%.... .......................................
........%,/%,%/............,,,,,, ...............*..........
........,/*,/,,..(.....,/*//////***,,............,,.........
.......*/#/#**,,.....***/(/////((/*,,,,......,.../...*......
..,,,..,#***#*,.....****/#%&&#////**,,.......*,,,(.,,*......
..........,.......,**,**/(////*//**,........ *..,*.,.*......
..........,.,......,*,,,....*.,..............*...*...*......
..........,.........,*,,,...(*,,....**.......*.......*......
.........,,.,,......./**/*,,*../.,...,,.....,*,.,,...*,.....
.......**,(.**/,......*,.,,,,.,..,...........*..,,..,(......
...../*,***.,***/((((//,,.*,****,*....,.....,*.,/*.*,/.*....
...(((((,,,,,*#&%(,*/((*,*,*.....,,.*......./****/,,,,../...
.,#%#%%%%&&%%%%&%%%%%%%%%.,,*/**,*,...#%%#%&%#%###%##%##%##.
#%%&%&&&&&&&&&&&&&&&&&&&&&&&%%,...,%%%&&&%%%&&&&&&&&&%%%%%%%
(/(((((((((((/((/((((//(/(/(//(/((((/(((%/(((((((/(((((((///
/((((///(((((((((/((((/((((((((((((((((((((((/((((((/((/(((/`}
      </pre>
    </div>
  </div>
</div>
</>
);
}
