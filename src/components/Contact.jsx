import React from 'react';
import { colors } from '../palette';
import { fonts } from '../fonts';

const Contact = () => {
  return (
    <div id="contact-section" style={{ backgroundColor: colors.forthText, color: colors.text, height: 'auto' }}>
      <h1 style={{ fontSize: fonts.h1, paddingTop: '2rem', paddingBottom: '1rem'}}>Contact</h1>
      <p style={{ fontSize: fonts.p1 }}>
       Let's: <span style={{ color: colors.secondText }}>connect</span>, <span style={{ color: colors.secondText }}>discuss</span> a role, or <span style={{ color: colors.secondText }}>build</span> something!
      </p>
    </div>
);
};

export default Contact;
