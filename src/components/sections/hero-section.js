import React, { useEffect, useRef } from 'react';
import baffle from 'baffle';

const Hero = ({ isHeroVisible }) => {
  const textRef = useRef(null); 

  useEffect(() => {
    if (isHeroVisible) {
      const text = baffle(textRef.current);
      text.set({
        characters: '█▒░▒▒█░▒▒█▓▒▒▒░░▒▒▓▒█░░█▒▒▒▒▒▒▒▒▒░▒▒▒▒',
        speed: 85,
      });

      text.start();
      text.reveal(4000);

      return () => {
        text.reveal(0);
      };
    }
  }, [isHeroVisible]);

  return (
    <div className="hero-container">
      <div className='text-wrapper'>
        <p className='data' ref={textRef}>LET'S BUILD SOLUTIONS</p>
      </div>
    </div>
  );
};

export default Hero;
