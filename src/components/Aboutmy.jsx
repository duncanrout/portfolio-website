import React from 'react';
import './aboutmy.css';
import { colors } from '../palette';
import useIsMobile from '../useIsMobile';
import { fonts } from '../fonts';

const Aboutmy = () => {
  const isMobile = useIsMobile();
  const past = 'I have always had a curiosity about computers, mathematics, and art, so I knew technology was the place for me! I went to school at Loyola University Chicago, completed an internship, and worked at a consulting company where I was contracted for two projects.';
  const present = 'Now, I am currently working on myself through personal projects, study, and wellness. I am based in Chicago and am currently looking for roles in front-end development, quality assurance, and data.';
  const future = 'Looking ahead, I’m excited about the future of programming and the endless opportunities it presents. I’m confident that my passion for the field, coupled with my skills and curiosity, will enable me to make an impact in the industry in the years to come.';
  return (
    <div class="container-fluid" id="about-section" style={{ backgroundColor: colors.background, color: colors.text, height: 'auto', paddingBottom: '3rem' }}>
      {isMobile ? (
      <>
        <h1 style={{ paddingTop: '1rem', paddingBottom: '1rem' }}>About my</h1>
        <h2>Past</h2>
        <div className="about-text-box">
          <p>{past}</p>
        </div>
        <h2>Present</h2>
        <div className="about-text-box">
          <p>{present}</p>
        </div>
        <h2>Future</h2>
        <div className="about-text-box">
          <p>{future}</p>
        </div>
      </>
    ) : (
      <>
        <div className="aboutmy">
          <h1 style={{ fontSize: fonts.h1Big, paddingTop: '1rem', paddingBottom: '6rem' }}>About my</h1>
          <div className='about-ppf-row'>
            <div className="about-text-box" style={{ paddingRight: '5rem', paddingLeft: '5rem'}}>
              <div className="about-inner-box">
                <h2 style={{ fontSize: fonts.h2Big }}>Past</h2>
                <p style={{ fontSize: fonts.pBig }}>{past}</p>
              </div>
            </div>
            <div className="about-text-box" style={{ paddingRight: '5rem', paddingLeft: '5rem'}}>
              <div className="about-inner-box">
                <h2 style={{ fontSize: fonts.h2Big }}>Present</h2>
                <p style={{ fontSize: fonts.pBig }}>{present}</p>
              </div>
            </div>
            <div className="about-text-box" style={{ paddingRight: '5rem', paddingLeft: '5rem'}}>
              <div className="about-inner-box">
                <h2 style={{ fontSize: fonts.h2Big }}>Future</h2>
                <p style={{ fontSize: fonts.pBig }}>{future}</p>
              </div>
            </div>
          </div>
        </div>
      </>
    )}
    </div>
);
};

export default Aboutmy;
