import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';

import Loader from './components/loaders/loader';
import AnimatedBackground from './components/backgrounds/main-bg';
import Navbar from './components/navigation/navbar';

import Home from './components/pages/home';
import CV from './components/pages/cv';
import Works from './components/pages/works';

const pageVariants = {
  initial: {
    opacity: 0,
    x: 20,
  },
  in: {
    opacity: 1,
    x: 0,
  },
  out: {
    opacity: 0,
    x: -20,
  }
};

const pageTransition = {
  type: "tween",
  duration: 0.4,
  ease: "easeInOut",
};

const AnimatedRoutes = ({ loading, hasAnimatedBackground  }) => {
  const location = useLocation(); 
  const isHomePage = location.pathname === '/'; 
  const isWorksPage = location.pathname === '/works';

  
  useEffect(() => {
    if (isWorksPage) {
      document.body.style.backgroundColor = '#fff'; 
      document.body.style.color = '#000'; 
    } else {
      document.body.style.backgroundColor = '#1F42E3'; 
      document.body.style.color = '#fff'; 
    }

    
    return () => {
      document.body.style.backgroundColor = '';
      document.body.style.color = '';
    };
  }, [isWorksPage]);

  return (
    <div>
      {isHomePage && <AnimatedBackground loading={hasAnimatedBackground} />}
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

          <Route
            path="/works"
            element={
              <motion.div
                layout
                initial="initial"
                animate="in"
                exit="out"
                variants={pageVariants}
                transition={pageTransition}
              >
                <Works loading={loading}/>
              </motion.div>
            }
          />
        </Routes>
      </AnimatePresence>
    </div>
  );
};

const App = () => {
  const [loading, setLoading] = useState(true);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [hasAnimatedBackground, setHasAnimatedBackground] = useState(false);


  const handleLoadComplete = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      setLoading(false);
      setIsTransitioning(false);
      setHasAnimatedBackground(true);
    }, 570);
  };

  return (
    <div className={`app ${loading ? 'app--loading' : ''} ${isTransitioning ? 'app--transitioning' : ''}`}>
      {loading && <Loader onLoadComplete={handleLoadComplete} />}
      <div className={`app-content ${loading ? 'hidden' : ''}`}>
        <Router>
          <Navbar />
          <AnimatedRoutes loading={loading} hasAnimatedBackground={hasAnimatedBackground}/> 
        </Router>
      </div>
    </div>
  );
};

export default App;
