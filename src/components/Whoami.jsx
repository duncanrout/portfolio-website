import React from 'react';
import './whoami.css';
import { colors } from '../palette';

const Whoami = () => {
  return (
    <div className="whoami">
      <div style={{ backgroundColor: colors.background, color: colors.text }} className="text-box">
        <div className="inner-box">
          <h3 style={{ color: colors.text }}>Hello, I'm Duncan</h3>
          <h4 style={{ color: colors.secondText }}>Full-Stack Developer <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-record-fill" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M8 13A5 5 0 1 0 8 3a5 5 0 0 0 0 10"/>
            </svg> Software Engineer
          </h4>
          <p style={{ color: colors.text }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
        </div>
      </div>
      <div className="image-box" style={{ backgroundColor: colors.background, color: colors.text }}>
        <div className="inner-box">
          <img src="https://via.placeholder.com/400" alt="Placeholder" />
        </div>
      </div>
    </div>

);
};

export default Whoami;
