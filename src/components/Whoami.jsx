import React from 'react';
import './whoami.css';
import { colors } from '../palette';
import useIsMobile from '../useIsMobile';
import { fonts } from '../fonts';

const Whoami = () => {
  const isMobile = useIsMobile();

  return (
    <div className="whoami">
      {isMobile ?   (
        <div style={{ backgroundColor: colors.background, color: colors.text }} className="who-text-box">
          <div className="who-inner-box">
            <h1 style={{ color: colors.text, fontSize: fonts.h1 }}>Hello, I'm Duncan</h1>
            <h2 style={{ color: colors.secondText, fontSize: fonts.h2 }}>Full-Stack Developer <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-record-fill" viewBox="0 0 16 16">
              <path fill-rule="evenodd" d="M8 13A5 5 0 1 0 8 3a5 5 0 0 0 0 10"/>
              </svg> Software Engineer
            </h2>
            <p style={{ color: colors.text, fontSize: fonts.pBig }}>I’m a passionate junior Full-Stack Developer based in Chicago, currently looking for work. Developing projects excites me, and I am committed to creating the best product possible. I have 2 years of professional experience and am excited to see what's next!</p>
          </div>
        </div>
      ) : (      
        <>
          <div style={{ backgroundColor: colors.background, color: colors.text }} className="who-text-box-outer" />
          <div style={{ backgroundColor: colors.background, color: colors.text }} className="who-text-box">
            <div className="who-inner-box">
              <h1 style={{ color: colors.text, fontSize: fonts.h1 }}>Hello, I'm Duncan</h1>
              <h2 style={{ color: colors.secondText, fontSize: fonts.h2 }}>Full-Stack Developer <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-record-fill" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M8 13A5 5 0 1 0 8 3a5 5 0 0 0 0 10"/>
                </svg> Software Engineer
              </h2>
              <p style={{ color: colors.text, fontSize: fonts.pBig }}>I’m a passionate junior Full-Stack Developer based in Chicago, currently looking for work. Developing projects excites me, and I am committed to creating the best product possible. I have 2 years of professional experience and am excited to see what's next!</p>
            </div>
          </div>
          <div style={{ backgroundColor: colors.background, color: colors.text }} className="who-text-box-outer" />
        </>
      )}
    </div>
  );
};

export default Whoami;
