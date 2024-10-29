import React, { useEffect, useRef } from 'react';
import baffle from 'baffle';

const Hero = ({ isHeroVisible }) => {
  // Crear referencias para cada elemento
  const textRefs = useRef([React.createRef(), React.createRef(), React.createRef()]);

  useEffect(() => {
    if (isHeroVisible) {
      // Crear instancias de baffle para cada elemento
      const baffleInstances = textRefs.current.map((ref) => {
        const instance = baffle(ref.current);
        instance.set({
          characters: '█▒░░▒░▒█░░░░▒▒▓▒▒▒░░▒▒▓▒█',
          speed: 120,  
        });
        instance.start();
        return instance;
      });

      // Revelación escalonada de cada instancia
      baffleInstances[0].reveal(15000); 
      setTimeout(() => baffleInstances[1].reveal(18000), 700); // 2da palabra en 18s, después de 3s
      setTimeout(() => baffleInstances[2].reveal(21000), 1400); // 3ra palabra en 21s, después de 6s

      // Detener las instancias al desmontar
      return () => {
        baffleInstances.forEach((instance) => instance.stop());
      };
    }
  }, [isHeroVisible]);

  return (
    <div className="hero-container">
      <div className='text-wrapper'>
        <p className='data' ref={textRefs.current[0]}>LET'S</p>
        <p className='data' ref={textRefs.current[1]}>BUILD</p>
        <p className='data' ref={textRefs.current[2]}>SOLUTIONS</p>
      </div>
    </div>
  );
};

export default Hero;
