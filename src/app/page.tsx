"use client";
//theoretically we dont need these
import './globals.css'
import './styling/App.css';
import './styling/themes.css';
import './styling/Toast.css';

import "./styling/Home.css"
import Link from 'next/link'
import { retrieveTermsAgreedTimestamp } from './functions/browser';
import Disclaimer from './components/Disclaimer';
import { useTheme } from './theme-provider';
import Button from './components/Button';
//TODO insert GUARD CLAUSE to check last agreed and then pass the state variable to that function
//so that it can automatically update the state without having to worry about making a context variable

export default function Home() {
  
  const lastAgreed = retrieveTermsAgreedTimestamp();
  const state = useTheme();
  const isMobile = state?.isMobile ?? false; //default to false
  //todo we should use ReactUseSync to retrieveTermsAgreedTimestamp here rather than coupling context together
  //I do like that this guardclause works tho
  if (state?.showDisclaimer) {
    return (<Disclaimer></Disclaimer>);
  }

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
            <Link href="/dashboard"><Button text="Enter App" className="home-enter-button"></Button></Link>
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
