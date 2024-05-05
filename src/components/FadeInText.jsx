import React, { useRef, useEffect, useState } from 'react';
import './FadeInText.css';

const FadeInText = ({ children }) => {
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
  }, []);

  return (
    <div ref={fadeInRef} className={`fade-in-text ${isVisible ? 'visible' : ''}`}>
      {children}
    </div>
  );
};

export default FadeInText;
