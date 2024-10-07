import React, { useState } from 'react';
import Loader from './components/loaders/loader';

const App = () => {
  const [loading, setLoading] = useState(true);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const handleLoadComplete = () => {
    setIsTransitioning(true); // Iniciar la transición
    setTimeout(() => {
      setLoading(false);
      setIsTransitioning(false);
    }, 570); // Tiempo de espera para la transición
  };

  return (
    <div className={`app ${loading ? 'app--loading' : ''} ${isTransitioning ? 'app--transitioning' : ''}`}>
      {loading && <Loader onLoadComplete={handleLoadComplete} />}
      <div className={`app-content ${loading ? 'hidden' : ''}`}>
        <h1>Hola, mundo!</h1>
        <p>Hola</p>
      </div>
    </div>
  );
};

export default App;
