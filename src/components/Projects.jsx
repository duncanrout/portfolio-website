import React from 'react';
import './projects.css';
import { colors } from '../palette';
import Project from './Project';

const Projects = () => {
  return (
    <div style={{ backgroundColor: colors.background, color: colors.text, height: '250vh' }}>
      <h1 style={{ paddingTop: '8rem'}}>Projects</h1>
      <div className="projects">
        <Project title="Title" description="Description ..." img="https://via.placeholder.com/400" tech="tech1, tech2" />
        <Project title="Title" description="Description ..." img="https://via.placeholder.com/400" tech="tech1, tech2" />
        <Project title="Title" description="Description ..." img="https://via.placeholder.com/400" tech="tech1, tech2" />
      </div>
    </div>
);
};

export default Projects;
