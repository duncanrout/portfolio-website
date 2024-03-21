import React from 'react';
import './project.css';

const Project = ({ title, img, description, tech }) => {
  return (
    <div className="project-container">
        <div className="inner-box">
            <div className="project-img">
                <img src={img} alt={title} />
            </div>
        </div>
        <div className="inner-box">
            <div className="project-info">
                <h2>{title}</h2>
                <p>{description}</p>
                <span className="tech-label">{tech}</span>
            </div>
        </div>
    </div>
  );
};

export default Project;
