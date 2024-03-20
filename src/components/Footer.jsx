import React from 'react';

const Footer = () => {
  return (
    <footer>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
            <ul className="navbar-nav ml-auto">
            <li className="nav-item">
                <a className="nav-link active" href="#email">Email</a>
            </li>
            <li className="nav-item">
                <a className="nav-link active" href="#git">GitHub</a>
            </li>
            <li className="nav-item">
                <a className="nav-link active" href="#linkedin">LinkedIn</a>
            </li>
            <li className="nav-item">
                <a className="nav-link active" href="#resume">Resume</a>
            </li>
            </ul>
        </div>
        </nav>
    </footer>
  );
};

export default Footer;
