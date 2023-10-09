import Button from './Button';
import { ReactComponent as TwitterIcon } from '../assets/icons/brands/twitter.svg';
import { ReactComponent as DiscordIcon } from '../assets/icons/brands/discord.svg';

import '../styling/Footer.css';
import Modal from './modals/Modal';
import Disclaimer from './Disclaimer';
import { useState } from 'react';

function Footer() {
  const [isTermsModalOpen, setIsTermsModalOpen] = useState<boolean>(false);

  const openLinkNewTab = (link: string) => {
    const openTab = window.open(link, '_blank');
    if (openTab !== null) {
      openTab.focus();
    }
  };

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
          <Button
            onButtonClick={() => {
              setIsTermsModalOpen(true);
            }}
          >
            Terms of Use
          </Button>
          <div className=" display-flex-row gap-common">
            <Button
              onButtonClick={() => {
                openLinkNewTab(discordUrl);
              }}
              className="icon-button padding-none"
            >
              <DiscordIcon fill="currentColor" className="svg-icon svg-shadow display-flex" />
            </Button>
            <Button
              onButtonClick={() => {
                openLinkNewTab(twitterUrl);
              }}
              className="icon-button padding-none "
            >
              <TwitterIcon fill="currentColor" className="svg-icon svg-shadow display-flex" />
            </Button>
          </div>
        </div>
        <div className="footer-right"></div>
      </div>
      {isTermsModalOpen && (
        <Modal
          handleClose={() => {
            setIsTermsModalOpen(false);
          }}
        >
          <Disclaimer readMode={true} />
          <Button
            className="margin-top clickable disable-highlight border-full border-color-light"
            onButtonClick={() => setIsTermsModalOpen(false)}
          >
            Okay
          </Button>
        </Modal>
      )}
    </>
  );
}

export default Footer;
