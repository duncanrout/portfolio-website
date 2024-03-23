import React from 'react';
import Pdf from '../assets/RoutResume.pdf';
import { colors } from '../palette';
import useIsMobile from '../useIsMobile';

const Navbar = () => {
  const isMobile = useIsMobile();
  // const [isSVGChanged, setIsSVGChanged] = useState(false);

  // const toggleSVG = () => {
  //   setIsSVGChanged(!isSVGChanged);
  // };

  return (
    <nav style={{ padding: 0 }} className="navbar navbar-expand-lg bg-body-tertiary">
      <div style={{ backgroundColor: colors.thirdText, color: colors.text, flexDirection: 'row' }} className="container-fluid">
        {isMobile ? (
          <>
            <div className="d-flex">
              <a style={{ color: colors.text }} className="navbar-brand" href="/">DR</a>
            </div>
            <ul className="navbar-nav ml-auto" style={{ flexDirection: 'row'}}>
              <li className="nav-item" style={{ paddingRight: '.5rem' }}>
                <a style={{ color: colors.text }} className="nav-link active" href="#about-section">About</a>
              </li>
              <li className="nav-item" style={{ paddingRight: '.5rem' }}>
                <a style={{ color: colors.text }} className="nav-link active" href="#projects-section">Projects</a>
              </li>
              <li className="nav-item" style={{ paddingRight: '.5rem' }}>
                <a style={{ color: colors.text }} className="nav-link active" href="#contact-section">Contact</a>
              </li>
              <li className="nav-item" style={{ paddingRight: '.5rem' }}>
                <a style={{ color: colors.text }} className="nav-link active" href={Pdf} target="_blank" rel="noopener noreferrer">Resume</a>
              </li>
            </ul>
          </>
        ) : (
          <>
            <div className="d-flex">
              <a style={{ color: colors.text }} className="navbar-brand" href="/">Duncan Rout</a>
            </div>
            <ul className="navbar-nav ml-auto" style={{ flexDirection: 'row'}}>
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
