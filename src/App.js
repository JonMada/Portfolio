import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';

import Loader from './components/loaders/loader';
import AnimatedBackground from './components/backgrounds/main-bg';
import Navbar from './components/navigation/navbar';

import Home from './components/pages/home';
import CV from './components/pages/cv';

const pageVariants = {
  initial: {
    opacity: 0,
    x: 20, // Desplazamiento hacia abajo al entrar
  },
  in: {
    opacity: 1,
    x: 0, // Regreso a la posición normal
  },
  out: {
    opacity: 0,
    x: -20, // Desplazamiento hacia arriba al salir
  }
};

const pageTransition = {
  type: "tween",
  duration: 0.4, 
  ease: "easeInOut", 
};

const AnimatedRoutes = ({ loading }) => {
  const location = useLocation(); 
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route
          path="/"
          element={
            <motion.div
              layout
              initial="initial"
              animate="in"
              exit="out"
              variants={pageVariants}
              transition={pageTransition}
            >
              <Home loading={loading}/>
            </motion.div>
          }
        />
        <Route
          path="/cv"
          element={
            <motion.div
              layout
              initial="initial"
              animate="in"
              exit="out"
              variants={pageVariants}
              transition={pageTransition}
            >
              <CV />
            </motion.div>
          }
        />
      </Routes>
    </AnimatePresence>
  );
};

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
        <AnimatedBackground />
        <Router>
          <Navbar />
          <AnimatedRoutes loading={loading}/> 
        </Router>
      </div>
    </div>
  );
};

export default App;
