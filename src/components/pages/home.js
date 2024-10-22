import React, { useEffect, useState } from 'react';
import Hero from '../sections/hero-section';

const Home = ({ loading }) => {
  const [isHeroVisible, setIsHeroVisible] = useState(false);

  useEffect(() => { 
    if (loading === false) {
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
