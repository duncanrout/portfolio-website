import React, { useRef, useEffect, useState } from 'react';
import './FadeInImageText.css';
import { colors } from '../palette';

const FadeInImageText = ({ imagetext, fontSize, paddingLeft, paddingRight, imgLink }) => {
  const [isVisible, setIsVisible] = useState(false);
  const fadeInRef = useRef(null);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5
    };

    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      });
    }, options);

    if (fadeInRef.current) {
      observer.observe(fadeInRef.current);
    }

    return () => {
      if (fadeInRef.current) {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        observer.unobserve(fadeInRef.current);
      }
    };
  }, [fadeInRef]);

  return (
    <a href={imgLink} style={{ color: colors.text }}>
      <h1
        ref={fadeInRef}
        className={`custom-font fade-in-text ${isVisible ? 'visible' : ''}`}
        style={{ fontSize, paddingLeft, paddingRight }}
      >
        {imagetext.split('').map((char, index) => (
          <span key={index} className={`fade-in-char ${isVisible ? 'visible' : ''}`}>
            {char}
          </span>
        ))}
      </h1>
    </a>
  );
};

export default FadeInImageText;
