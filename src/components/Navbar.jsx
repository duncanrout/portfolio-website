import React, { useState } from 'react';
import Pdf from '../assets/RoutResume.pdf';
import { colors } from '../palette';
import useIsMobile from '../useIsMobile';

const Navbar = () => {
  const isMobile = useIsMobile();
  const [isSVGChanged, setIsSVGChanged] = useState(false);

  const toggleSVG = () => {
    setIsSVGChanged(!isSVGChanged);
  };

  return (
    <nav style={{ padding: 0 }} className="navbar navbar-expand-lg bg-body-tertiary">
      <div style={{ backgroundColor: colors.thirdText, color: colors.text }} className="container-fluid">
        {isMobile ? (
          <>
            <div className="d-flex">
              <a style={{ color: colors.text }} className="navbar-brand" href="/">DR</a>
            </div>
            <button className="btn" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample" onClick={toggleSVG} style={{ backgroundColor: colors.text, color: colors.thirdText }}>
              {isSVGChanged ? (
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-caret-up-fill" viewBox="0 0 16 16">
                  <path d="M7.247 4.86 2.451 10.342a1 1 0 0 0 .753 1.659h9.592a1 1 0 0 0 .753-1.659L8.753 4.86a1 1 0 0 0-1.506 0z"/>
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-caret-down-fill" viewBox="0 0 16 16">
                  <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"/>
                </svg>
              )}
            </button>
            <div className="collapse" id="collapseExample">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <a style={{ color: colors.text }} className="nav-link active" href="#about-section">About</a>
                </li>
                <li className="nav-item">
                  <a style={{ color: colors.text }} className="nav-link active" href="#projects-section">Projects</a>
                </li>
                <li className="nav-item">
                  <a style={{ color: colors.text }} className="nav-link active" href="#contact-section">Contact</a>
                </li>
                <li className="nav-item">
                  <a style={{ color: colors.text }} className="nav-link active" href={Pdf} target="_blank" rel="noopener noreferrer">Resume</a>
                </li>
              </ul>
            </div>
          </>
        ) : (
          <>
            <div className="d-flex">
              <a style={{ color: colors.text }} className="navbar-brand" href="/">Duncan Rout</a>
            </div>
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <a style={{ color: colors.text }} className="nav-link active" href="#about-section">About</a>
              </li>
              <li className="nav-item">
                <a style={{ color: colors.text }} className="nav-link active" href="#projects-section">Projects</a>
              </li>
              <li className="nav-item">
                <a style={{ color: colors.text }} className="nav-link active" href="#contact-section">Contact</a>
              </li>
              <li className="nav-item">
                <a style={{ color: colors.text }} className="nav-link active" href={Pdf} target="_blank" rel="noopener noreferrer">Resume</a>
              </li>
            </ul>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
