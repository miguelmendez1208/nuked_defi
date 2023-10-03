"use client"
import "./DashboardPage.css";
import MoonIcon from "../assets/icons/MoonIcon";
import PlayIcon from "../assets/icons/PlayIcon";
import ArrowUpIcon from "../assets/icons/ArrowUpIcon";

export default function DashboardPage() {

    const buildDashPositions = () => {
        return (
          <div className="display-flex-col w-100">
            <div className="border-full border-color-light filled-bg border-radius-full padding-double">
              <div className="display-flex-col gap-double">
                <div className="horizontal-center">
                  <div className="dash-icon fill-icon-color-light-1 vertical-center border-radius-full padding-full">
                    <ArrowUpIcon/>
                  </div>
                </div>
                <div className="horizontal-center font-xxl font-bold-half font-secondary">Thing 1</div>
                <div className="horizontal-center">
                  <div className="dashboard-text text-center text-color-light-4">
                    Description of first thing here.
                  </div>
                </div>
                <div className="horizontal-center"></div>
              </div>
            </div>
          </div>
        );
      };


    const buildDashStability = () => {
        return (
          <div className="border-full border-color-light filled-bg border-radius-full padding-double w-100">
            <div className="display-flex-col gap-double">
              <div className="horizontal-center">
                <div className="dash-icon fill-icon-color-light-1 vertical-center border-radius-full padding-full">
                  <PlayIcon/>
                </div>
              </div>
              <div className="horizontal-center font-xxl font-bold-half font-secondary">Thing 2</div>
              <div className="horizontal-center">
                <div className="dashboard-text text-center text-color-light-4">
                  Description of second thing here.
                </div>
              </div>
              <div className="horizontal-center"> </div>
            </div>
          </div>
        );
      };
  
    const buildDashStaking = () => {
      return (
        <div className="border-full border-color-light filled-bg border-radius-full padding-double w-100">
          <div className="display-flex-col gap-double">
            <div className="horizontal-center">
              <div className="dash-icon fill-icon-color-light-1 vertical-center border-radius-full padding-full">
                <div className="fill-svg-primary dash-icon-size">
                <div className="icon flat-color">
                <MoonIcon/>
                </div>
                </div>
              </div>
            </div>
            <div className="horizontal-center font-xxl font-bold-half font-secondary">Thing 3</div>
            <div className="horizontal-center">
              <div className="dashboard-text text-center text-color-light-4">
                Description of third thing here.
              </div>
            </div>
          </div>
        </div>
      );
    };
  
    return (
      <div className="dashboard-page w-100 page-content-max-width">
        <div className="display-flex-col w-100 gap-triple">
          <div className="display-flex-row">  {buildDashPositions()}  </div>
          <div className="display-flex-row break-width-l gap-double">
            {buildDashStability()}
            {buildDashStaking()}
          </div>
        </div>
      </div>
    );
  }