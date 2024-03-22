import React from 'react';
import './project.css';
import { colors } from '../palette';
import useIsMobile from '../useIsMobile';
import { fonts } from '../fonts';

const Project = ({ title, img, description, tech }) => {
  const isMobile = useIsMobile();
  return (
    <div className="project-box">
      {/* Wierd workaround but alas */}
      {isMobile ? (
        <div className="image-box" style={{ alignItems: 'flex-start'}}>
          <div className="project-inner-box">
            <img src={img} alt={title} />
          </div>
        </div>
      ) : (
        <div className="project-image-box">
          <div className="project-inner-box">
            <img src={img} alt={title} />
          </div>
        </div>
      )}
      <div className="project-inner-box">
        <h2 style={{ fontSize: fonts.h2}}>{title}</h2>
        <p style={{ fontSize: fonts.p1}}>{description}</p>
        <span className="tech-label" style={{ backgroundColor: colors.forthText, fontSize: fonts.p1 }}>{tech}</span>
      </div>
    </div>
  );
};

export default Project;
