import React from 'react';
import { colors } from '../palette';
import { fonts } from '../fonts';

const Contact = () => {
  return (
    <div id="contact-section" style={{ backgroundColor: colors.white, color: colors.waves2b, height: 'auto' }}>
      <h1 style={{ fontSize: fonts.h1, paddingTop: '2rem', paddingBottom: '1rem'}}>Contact</h1>
      <p style={{ fontSize: fonts.p1 }}>
       Let's: connect, discuss a role, or build something!
      </p>
    </div>
);
};

export default Contact;
