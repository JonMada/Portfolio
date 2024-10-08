import React, { useState } from 'react';

import Loader from './components/loaders/loader';
import AnimatedBackground from './components/backgrounds/main-bg';

const App = () => {
  const [loading, setLoading] = useState(true);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const handleLoadComplete = () => {
    setIsTransitioning(true); 
    setTimeout(() => {
      setLoading(false);
      setIsTransitioning(false);
    }, 570); 
  };

  return (
    <div className={`app ${loading ? 'app--loading' : ''} ${isTransitioning ? 'app--transitioning' : ''}`}>
      {loading && <Loader onLoadComplete={handleLoadComplete} />}
      <div className={`app-content ${loading ? 'hidden' : ''}`}>
        <AnimatedBackground/>

      </div>
    </div>
  );
};

export default App;
