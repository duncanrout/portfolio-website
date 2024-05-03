import React from 'react';
import './whoami.css';
import { colors } from '../palette';
import useIsMobile from '../useIsMobile';
import { fonts } from '../fonts';

const Whoami = () => {
  const isMobile = useIsMobile();
  const text = 'a Chicago based Full Stack Developer with two years of professional experience. I build the frontend, middleware, and backend of websites and web applications that contribute to the success of the overall product.'

  return (
    <div className="whoami">
      {isMobile ?   (
        <div style={{ backgroundColor: colors.white, color: colors.waves2b }} className="who-text-box">
          <div className="who-inner-box">
            <h1 style={{ color: colors.waves2b, fontSize: fonts.h1 }}>Hello, I'm Duncan</h1>
            {/* <h2 style={{ color: colors.secondText, fontSize: fonts.h2 }}> Software Engineer</h2> */}
            <p style={{ color: colors.waves2b, fontSize: fonts.pBig }}>{text}</p>
          </div>
        </div>
      ) : (      
        <>
          <div style={{ backgroundColor: colors.white, color: colors.waves2b }} className="who-text-box-outer" />
          <div style={{ backgroundColor: colors.white, color: colors.waves2b }} className="who-text-box">
            <div className="who-inner-box">
              <h1 style={{ color: colors.waves2b, fontSize: fonts.h1 }}>Hello, I'm Duncan</h1>
              {/* <h2 style={{ color: colors.secondText, fontSize: fonts.h2 }}>Software Engineer</h2> */}
              <p style={{ color: colors.waves2b, fontSize: fonts.pBig }}>{text}</p>
            </div>
          </div>
          <div style={{ backgroundColor: colors.white, color: colors.waves2b }} className="who-text-box-outer" />
        </>
      )}
    </div>
  );
};

export default Whoami;
