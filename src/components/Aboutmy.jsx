import React from 'react';
import './aboutmy.css';
import { colors } from '../palette';
import useIsMobile from '../useIsMobile';
import { fonts } from '../fonts';

const Aboutmy = () => {
  const isMobile = useIsMobile();
  return (
    <div class="container-fluid" id="about-section" style={{ backgroundColor: colors.forthText, color: colors.text, height: '100vh' }}>
      {isMobile ? (
      <>
        <h1 style={{ paddingTop: '4rem', paddingBottom: '4rem' }}>About my</h1>
        <h2>Past</h2>
        <div className="text-box">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
        </div>
        <h2>Present</h2>
        <div className="text-box">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
        </div>
        <h2>Future</h2>
        <div className="text-box">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
        </div>
      </>
    ) : (
      <>
        <h1 style={{ fontSize: fonts.h1, paddingTop: '8rem' }}>About my</h1>
        <div className="aboutmy">
          <div className="text-box">
            <div className="inner-box">
              <h2 style={{ fontSize: fonts.h2 }}>Past</h2>
              <p style={{ fontSize: fonts.p1 }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
            </div>
          </div>
          <div className="text-box">
            <div className="inner-box">
              <h2 style={{ fontSize: fonts.h2 }}>Present</h2>
              <p style={{ fontSize: fonts.p1 }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
            </div>
          </div>
          <div className="text-box">
            <div className="inner-box">
              <h2 style={{ fontSize: fonts.h2 }}>Future</h2>
              <p style={{ fontSize: fonts.p1 }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
            </div>
          </div>
        </div>
      </>
    )}
    </div>
);
};

export default Aboutmy;
