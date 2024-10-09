import React, { useEffect, useState } from 'react';
import Hero from '../sections/hero-section';

const Home = ({ loading }) => {
  const [isHeroVisible, setIsHeroVisible] = useState(false);

  useEffect(() => {
    console.log('Loading state changed:', loading); // Verificar el estado de loading
    if (loading === false) {
      console.log('Setting isHeroVisible to true'); // Verificar cuándo se establece
      setIsHeroVisible(true);
    }
  }, [loading]);

  return (
    <div className="home-container">
      {isHeroVisible && <Hero isHeroVisible={isHeroVisible} />}
    </div>
  );
};

export default Home;
