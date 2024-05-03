import React from 'react';
import './projects.css';
import { colors } from '../palette';
import Project from './Project';
import useIsMobile from '../useIsMobile';
import alightPng from '../assets/alight-insurance-logo.png';
import FadeInText from './FadeInText';
import { fonts } from '../fonts';

const Experiences = () => {
  const isMobile = useIsMobile();
  const paddingTop = isMobile ? '1rem' : '3rem';
  const paddindingX = isMobile ? '1rem' : '10rem';
  const rubiconDescription = 'Rubicon Carbon is a carbon credits trading platform that enables companies to offset their carbon emissions. With $300 million backing, I worked with a team of eight other developers to create this application from the ground up. I worked as a frontend developer, building and testing different types of components for the web application.';
  const alightDescription = 'Alight Insurance is a cloud-based technology and services provider in healthcare. I worked with a team of four others to restructure numerous apps within each services to make the apps OWASP compliant. I also worked as a QA to ensure our changes were working.';
  const hubsBotDescription = 'For my internship at sales-i (a btb sales analytics company). Part of my job, as well as the other interns, was business analyst work. We were given a large set of company names to then research if each company was a good fit or not. This work was very remedial at times. Outside of work, I created a script that automated the redundant logic and manual clicking of this kind of work!';
  // const pokerTracker = 'This application will be a browser-hosted website where a user can track and display their card game points. I am working with Three-Small-Scoops to create this application.'

  return (
    <div id="projects-section" style={{ backgroundColor: colors.waves2b, color: colors.text, height: 'auto' }}>
      <FadeInText>
        <h1 style={{ paddingTop: paddingTop, paddingBottom: '3rem'}}>Experience</h1>
        <h2 style={{ paddingTop: paddingTop, paddingBottom: '3rem', fontSize: fonts.p, paddingLeft: paddindingX, paddingRight: paddindingX }}>I graduated from Loyola University Chicago in 2022 then immediately started working. I was employed by SPR consulting and worked with clients: Mckinsey, and Alight insurance. I also interned sales-i, a salesforce competitor</h2>
      </FadeInText>
      <div className="expiriences">
        <Project title="Rubicon Carbon" description={rubiconDescription} img="https://rubiconcarbon.com/wp-content/uploads/2023/08/RubiconCarbon_Logo_ANIMATION_once.webp" tech="React.js, Material UI, AWS" imgLink="https://rubiconcarbon.com/" />
        <Project title="Alight Insurance - CBA" description={alightDescription} img={alightPng} tech="Spring boot, Java, Maven, Selenium" imgLink="https://www.alight.com/" />
        <Project title="Sales-i" description={hubsBotDescription} imagetext={'sales-i'} tech="Hubspot, Selenium" imgLink="https://www.sales-i.com/" />
        {/* <Project title="3SS" description={pokerTracker} img="https://lirp.cdn-website.com/c8a2cb6d/dms3rep/multi/opt/Ginger-Sundae_Detailed_logo-155w.png" tech="React.js, Bootstrap, CloudFlare" /> */}
      </div>
    </div>
  );
};

export default Experiences;
