

import '../styling/Disclaimer.css';

interface DisclaimerProps {
  invisible: boolean;
  readMode?: boolean;
  className?: string;
}

function Disclaimer(props: DisclaimerProps) {

  return(
    <div
      className={
        (props.readMode ? '' : 'disclaimer ') +
        'display-flex vertical-center horizontal-center flex-grow-1'
      }
    >
      <div
        className={
          'disclaimer-wrapper display-flex-col text-center display-flex-align-center gap-double ' +
          (props.readMode ? '' : 'padding-double')
        }
      >
        <div className="display-flex-col gap-double">
          <div className="font-xxxl font-bold font-primary">Terms of Use</div>
          <div className="disclaimer-text-box border-full border-color-light padding-full display-flex-col gap-double">
            <span>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
              exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
              dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
              mollit anim id est laborum.
            </span>
          </div>
        </div>
      </div>
    </div>
    );
}

export default Disclaimer;
