import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

import icon from '../../assets/images/icon.png'; 
import icon2 from '../../assets/images/icon2.png';

const Navbar = () => {
  const location = useLocation();
  const [isModalOpen, setModalOpen] = useState(false);
  const [showMenuButton, setShowMenuButton] = useState(false);
  const [iconActive, setIconActive] = useState(icon);
  const [iconShifted, setIconShifted] = useState(false);
  const [isFullScreen, setIsFullScreen] = useState(false);

  const isHomePage = location.pathname === '/';
  const isWorksPage = location.pathname === '/works' || location.pathname.startsWith('/project/');
  const isPolicyPage = location.pathname === '/privacy-policy';
  const isTermsPage = location.pathname === '/terms-of-service';

  const toggleModal = () => setModalOpen(!isModalOpen);
  const closeModal = () => setModalOpen(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIconActive(icon2);
        setShowMenuButton(true);
        setIconShifted(true);
      } else {
        setIconActive(icon);
        setShowMenuButton(false);
        setIconShifted(false);
      }
    };

    const handleResize = () => {
      setIsFullScreen(window.innerWidth === window.screen.width);
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);
    handleResize();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <nav className={`navbar ${isWorksPage || isPolicyPage || isTermsPage ? 'navbar--inverted' : ''}`}>
      <div className={`navbar-icon ${iconShifted ? 'icon-shifted' : ''}`}>
        <Link to="/">
          <img src={iconActive} alt="Icon" className="navbar-logo" />
        </Link>
      </div>

      <div className="nav-bar-links">
      {!isModalOpen && (
          <>
              {isHomePage ? (
                  <>
                      {showMenuButton || !isFullScreen ? (
                          <div className="navbar-item menu-modal-link" onClick={toggleModal}>
                              <span>Menu</span>
                          </div>
                      ) : (
                          <>
                              <div className="social-media-links">
                                  <div className="navbar-linkedin">
                                      <a href="https://www.linkedin.com/in/jon-madariaga-ortega" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                                  </div>
                                  <div className="navbar-github">
                                      <a href="https://github.com/JonMada" target="_blank" rel="noopener noreferrer">GitHub</a>
                                  </div>
                              </div>
                              <div className="navbar-list">
                                  <div className="navbar-item">
                                      <Link to="/cv">About me</Link>
                                  </div>
                                  <div className="navbar-item">
                                      <Link to="/works">Works</Link>
                                  </div>
                                  <div className="navbar-item">
                                      <Link to="/contact">Contact</Link>
                                  </div>
                              </div>
                          </>
                      )}
                  </>
              ) : (
                  <div className="navbar-item menu-modal-link" onClick={toggleModal}>
                      <span>Menu</span>
                  </div>
              )}
          </>
      )}
  </div>

      {isModalOpen && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <div className="social-media-links">
              <div className="navbar-linkedin">
                <a href="https://www.linkedin.com/in/jon-madariaga-ortega" target="_blank" rel="noopener noreferrer" onClick={closeModal}>LinkedIn</a>
              </div>
              <div className="navbar-github">
                <a href="https://github.com/JonMada" target="_blank" rel="noopener noreferrer" onClick={closeModal}>GitHub</a>
              </div>
            </div>

            <div className="navbar-list">
              <div className="navbar-item">
                <Link to="/cv" onClick={closeModal}>About me</Link>
              </div>
              <div className="navbar-item">
                <Link to="/works" onClick={closeModal}>Works</Link>
              </div>
              <div className="navbar-item">
                <Link to="/contact" onClick={closeModal}>Contact</Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
