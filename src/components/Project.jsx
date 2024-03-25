import React from 'react';
import './project.css';
import { colors } from '../palette';
import useIsMobile from '../useIsMobile';
import { fonts } from '../fonts';
import FadeInText from './FadeInText';

const Project = ({ title, img, description, tech, link }) => {
  const isMobile = useIsMobile();
  return (
    <div className="project-box">
      <FadeInText>
      {/* Wierd workaround but alas */}
      {isMobile ? (
        <div className="project-inner-box">
          <img style={{ maxWidth: '10rem', paddingTop: '1rem', paddingBottom: '2rem' }} src={img} alt={title} />
          <h2 style={{ fontSize: fonts.h2 }}>{title}</h2>
          <p style={{ fontSize: fonts.p1 }}>{description}</p>
          <span className="tech-label" style={{ backgroundColor: colors.forthText, fontSize: fonts.p1 }}>{tech}</span>
        </div>
      ) : (
        <>
        <div className="project-image-box">
            <div className="project-inner-box">
              <img style={{ maxWidth: '18rem', minWidth: '10rem' }} src={img} alt={title} />
            </div>
          </div>
          <div className="project-inner-box">
            <h2 style={{ fontSize: fonts.h2 }}>{title}</h2>
            <p style={{ fontSize: fonts.p1 }}>{description}</p>
            <span className="tech-label" style={{ backgroundColor: colors.forthText, fontSize: fonts.p1 }}>{tech}</span>
          </div>
        </>
      )}
</FadeInText>
    </div>
  );
};

export default Project;
