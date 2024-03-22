import React from 'react';
import './projects.css';
import { colors } from '../palette';
import Project from './Project';
import useIsMobile from '../useIsMobile';

const Projects = () => {
  const isMobile = useIsMobile();
  const paddingTop = isMobile ? '3rem' : '8rem';
  return (
    <div id="projects-section" style={{ backgroundColor: colors.background, color: colors.text, height: 'auto' }}>
      <h1 style={{ paddingTop: paddingTop, paddingBottom: '3rem'}}>Projects</h1>
      <div className="projects">
        <Project title="Title" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur." img="https://via.placeholder.com/400" tech="tech1, tech2" />
        <Project title="Title" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." img="https://via.placeholder.com/400" tech="tech1, tech2" />
        <Project title="Title" description="Description ..." img="https://via.placeholder.com/400" tech="tech1, tech2" />
      </div>
    </div>
);
};

export default Projects;
