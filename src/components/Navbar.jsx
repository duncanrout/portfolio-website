import React from 'react';
import Pdf from '../assets/RoutResume.pdf';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <div className="d-flex">
          <a className="navbar-brand" href="#">Duncan Rout</a>
        </div>
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <a className="nav-link active">About</a>
          </li>
          <li className="nav-item">
            <a className="nav-link active">Skills</a>
          </li>
          <li className="nav-item">
            <a className="nav-link active">Project</a>
          </li>
          <li className="nav-item">
            <a className="nav-link active">Contact</a>
          </li>
          <li className="nav-item">
            <a className="nav-link active" href = {Pdf} target = "_blank">Resume</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
