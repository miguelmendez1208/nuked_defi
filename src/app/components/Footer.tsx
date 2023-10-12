import Button from './Button';
import Twitter from '../assets/icons/brands/Twitter';
import Discord from '../assets/icons/brands/Discord';
import '../styling/Footer.css';


function Footer() {

  const discordUrl = 'https://discord.com/';
  const twitterUrl = 'https://twitter.com/';
  const docsUrl = 'https://github.com/';

  return (
    <>
      <div className="footer padding-full">
        <div className="footer-left"></div>
        <div className="footer-center gap-common break-width-m">
          <a className="" href={docsUrl} target="_blank" rel="noreferrer">
            <Button>Docs</Button>
          </a>
            Terms of Use

          <div className=" display-flex-row gap-common">
              <div className="svg-icon svg-shadow display-flex"> 
              <Discord/>
              </div>
              <div className="svg-icon svg-shadow display-flex">
              <Twitter/>
              </div>
          </div>
        </div>
        <div className="footer-right"></div>
      </div>
    </>
  );
}

export default Footer;
