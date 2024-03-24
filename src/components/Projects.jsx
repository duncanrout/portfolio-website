import React from 'react';
import './projects.css';
import { colors } from '../palette';
import Project from './Project';
import useIsMobile from '../useIsMobile';
import alightPng from '../assets/alight.png';
import salesWebp from '../assets/sales-i.webp'

const Projects = () => {
  const isMobile = useIsMobile();
  const paddingTop = isMobile ? '3rem' : '8rem';
  const rubiconDescription = 'Rubicon Carbon is a carbon credits trading platform that enables companies to offset their carbon emissions. With $300 million backing, I worked with a team of eight other developers to create this application from the ground up.';
  const alightDescription = 'Alight Insurance is a cloud-based technology and services provider in healthcare. I worked with a team of four others to restructure numerous apps within each services to make the apps OWASP compliant. I also worked as a QA to ensure our changes were working.';
  const hubsBotDescription = 'For my internship at sales-i (a btb sales analytics company). Part of my job, as well as the other interns, was business analyst work. We were given a large set of company names to then research if each company was a good fit or not. This work was very remedial at times. Outside of work, I created a script that automated the redundant logic and manual clicking of this kind of work!';
  const pokerTracker = 'This application will be a browser-hosted website where a user can track and display their card game points. I am working with Three-Small-Scoops to create this application.'

  return (
    <div id="projects-section" style={{ backgroundColor: colors.background, color: colors.text, height: 'auto' }}>
      <h1 style={{ paddingTop: paddingTop, paddingBottom: '3rem'}}>Projects</h1>
      <div className="projects">
        <Project title="Rubicon Carbon" description={rubiconDescription} img="https://rubiconcarbon.com/wp-content/uploads/2023/08/RubiconCarbon_Logo_ANIMATION_once.webp" tech="React.js, Material UI, AWS" />
        <Project title="Alight Insurance - CBA" description={alightDescription} img={alightPng} tech="Spring boot, Java, Maven, Selenium" />
        <Project title="Sales-i" description={hubsBotDescription} img={salesWebp} tech="Hubspot, Selenium" />
        <Project title="3SS (In the works!)" description={pokerTracker} img="https://lirp.cdn-website.com/c8a2cb6d/dms3rep/multi/opt/Ginger-Sundae_Detailed_logo-155w.png" tech="React.js, Bootstrap, CloudFlare" />
      </div>
    </div>
  );
};

export default Projects;
