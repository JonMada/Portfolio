import React, { useState, useEffect } from "react";
import {
  HashRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

import Loader from "./components/loaders/loader";
import AnimatedBackground from "./components/backgrounds/main-bg";
import Navbar from "./components/navigation/navbar";

import Home from "./components/pages/home";
import CV from "./components/pages/cv";
import Works from "./components/pages/works";
import ProjectDetails from "./components/sections/works/project-details";
import Contact from "./components/pages/contact";
import PrivacyPolicy from "./components/pages/privacy-policy";
import TermsOfService from "./components/pages/terms";

import ScrollToTop from "./components/scroll/scrollTop";

const slideVariants = {
  initial: {
    opacity: 0,
    x: "100%",
  },
  in: {
    opacity: 1,
    x: 0,
  },
  out: {
    opacity: 0,
    x: "-100%",
  },
};

const slideTransition = {
  type: "spring",
  stiffness: 250,
  damping: 30,
};

const AnimatedRoutes = ({ loading, hasAnimatedBackground }) => {
  const location = useLocation();
  const isHomePage = location.pathname === "/";
  const isWorksPage =
    location.pathname === "/works" || location.pathname.startsWith("/project/");
  const isPolicyPage = location.pathname === "/privacy-policy";
  const isTermsPage = location.pathname === "/terms-of-service";

  useEffect(() => {
    if (isWorksPage || isPolicyPage || isTermsPage) {
      document.body.style.backgroundColor = "#f8f8f8";
      document.body.style.color = "#000";
    } else {
      document.body.style.backgroundColor = "#1F42E3";
      document.body.style.color = "#fff";
    }

    return () => {
      document.body.style.backgroundColor = "";
      document.body.style.color = "";
    };
  }, [isWorksPage, isPolicyPage, isTermsPage]);

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
                variants={slideVariants}
                transition={slideTransition}
              >
                <Home loading={loading} />
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
                variants={slideVariants}
                transition={slideTransition}
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
                variants={slideVariants}
                transition={slideTransition}
              >
                <Works loading={loading} />
              </motion.div>
            }
          />
          <Route
            path="/project/:id"
            element={
              <motion.div
                layout
                initial="initial"
                animate="in"
                exit="out"
                variants={slideVariants}
                transition={slideTransition}
              >
                <ProjectDetails />
              </motion.div>
            }
          />
          <Route
            path="/contact"
            element={
              <motion.div
                layout
                initial="initial"
                animate="in"
                exit="out"
                variants={slideVariants}
                transition={slideTransition}
              >
                <Contact />
              </motion.div>
            }
          />
          <Route
            path="/privacy-policy"
            element={
              <motion.div
                layout
                initial="initial"
                animate="in"
                exit="out"
                variants={slideVariants}
                transition={slideTransition}
              >
                <PrivacyPolicy />
              </motion.div>
            }
          />

          <Route
            path="/terms-of-service"
            element={
              <motion.div
                layout
                initial="initial"
                animate="in"
                exit="out"
                variants={slideVariants}
                transition={slideTransition}
              >
                <TermsOfService />
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
    <div
      className={`app ${loading ? "app--loading" : ""} ${
        isTransitioning ? "app--transitioning" : ""
      }`}
    >
      {loading && <Loader onLoadComplete={handleLoadComplete} />}
      <div className={`app-content ${loading ? "hidden" : ""}`}>
        <Router>
          <ScrollToTop />
          <Navbar />
          <AnimatedRoutes
            loading={loading}
            hasAnimatedBackground={hasAnimatedBackground}
          />
        </Router>
      </div>
    </div>
  );
};

export default App;
