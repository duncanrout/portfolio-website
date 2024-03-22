import React from 'react';
import './whoami.css';
import { colors } from '../palette';
import useIsMobile from '../useIsMobile';
import smile from '../assets/smile.jpg';
import { fonts } from '../fonts';

const Whoami = () => {
  const isMobile = useIsMobile();

  return (
    <div className="whoami">
      <div style={{ backgroundColor: colors.background, color: colors.text }} className="text-box">
        <div className="inner-box">
          <h1 style={{ color: colors.text, fontSize: fonts.h1 }}>Hello, I'm Duncan</h1>
          <h2 style={{ color: colors.secondText, fontSize: fonts.h2 }}>Full-Stack Developer <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-record-fill" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M8 13A5 5 0 1 0 8 3a5 5 0 0 0 0 10"/>
            </svg> Software Engineer
          </h2>
          <p style={{ color: colors.text, fontSize: fonts.p}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
        </div>
      </div>
      {!isMobile && (
        <div className="image-box" style={{ backgroundColor: colors.background, color: colors.text }}>
          <div className="inner-box">
            <div className="rounded-circle d-flex justify-content-center align-items-center p-1" style={{ width: '30rem', height: '30rem' }}>
              <img src={smile} alt="Circular Frame" className="img-fluid rounded-circle" style={{ maxWidth: '100%', maxHeight: '100%' }} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Whoami;
