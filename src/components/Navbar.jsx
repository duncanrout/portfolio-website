import React from 'react';
import Pdf from '../assets/RoutResume.pdf';
import { colors } from '../palette';

const Navbar = () => {
  return (
    <nav style={{ padding: 0 }} className="navbar navbar-expand-lg bg-body-tertiary">
      <div style={{ backgroundColor: colors.thirdText }} className="container-fluid">
        <div className="d-flex">
          <a style={{ color: colors.text }} className="navbar-brand" href="/">Duncan Rout</a>
        </div>
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <a style={{ color: colors.text }} className="nav-link active" href="#about">About</a>
          </li>
          <li className="nav-item">
            <a style={{ color: colors.text }} className="nav-link active" href="#skills">Skills</a>
          </li>
          <li className="nav-item">
            <a style={{ color: colors.text }} className="nav-link active" href="#projects">Projects</a>
          </li>
          <li className="nav-item">
            <a style={{ color: colors.text }} className="nav-link active" href="#contact">Contact</a>
          </li>
          <li className="nav-item">
            <a style={{ color: colors.text }} className="nav-link active" href={Pdf} target="_blank" rel="noopener noreferrer">Resume</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
