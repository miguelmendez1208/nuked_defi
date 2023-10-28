"use client"
import Button from './Button';
import Twitter from '../assets/icons/brands/Twitter';
import Discord from '../assets/icons/brands/Discord';
import '../styling/Footer.css';
import Link from 'next/link';
import { useThemeDispatch } from '../theme-provider';

function Footer() {

  const discordUrl = 'https://discord.com/';
  const twitterUrl = 'https://twitter.com/';
  const docsUrl = 'https://github.com/';

  //this is such ugly code actually
  const dispatch = useThemeDispatch();
  const setDisclaimer = () => {
    if (dispatch !== null) {
      dispatch({ type: "SHOW_DISCLAIMER" });
    } else {
      console.error("Dispatch context is null. Are you within theme provider?");
    }
  }

  //TODO:
  // reformatted? it looks kinda ugly.
  return (
    <>
      <div className="footer padding-full">
        <div className="footer-left"></div>
        <div className="footer-center gap-common break-width-m">
          <Link href={docsUrl}>
            <Button>Docs</Button>
          </Link>
          <Button onButtonClick={() => {
            setDisclaimer();
          }}>
            Terms of Use
          </Button>
          <div className=" display-flex-row gap-common">
            <Link href={discordUrl}>
              <Button className="icon-button padding-none">
                <div className="svg-icon svg-shadow display-flex">
                  <Discord />
                </div>
              </Button>
            </Link>
            <Link href={twitterUrl}>
              <Button className="icon-button padding-none">
                <div className="svg-icon svg-shadow display-flex">
                  <Twitter />
                </div>
              </Button>
            </Link>


          </div>
        </div>
        <div className="footer-right"></div>
      </div>
    </>
  );
}

export default Footer;
