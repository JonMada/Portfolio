import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import icon from '../../assets/images/icon.png'; 

const Navbar = () => {
  const location = useLocation();
  const [isModalOpen, setModalOpen] = useState(false);

  // Verifica si estamos en la página Home
  const isHomePage = location.pathname === '/';
  const isWorksPage = location.pathname === '/works' || location.pathname.startsWith('/project/');
  const isPolicyPage = location.pathname === '/privacy-policy';

  // Función para abrir y cerrar el modal
  const toggleModal = () => {
    setModalOpen(!isModalOpen);
  };

  // Función para cerrar el modal
  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <nav className={`navbar ${isWorksPage || isPolicyPage ? 'navbar--inverted' : ''}`}>
      <div className="navbar-icon">
        <Link to="/">
          <img src={icon} alt="Icon" className="navbar-logo" />
        </Link>
      </div>

      <div className='nav-bar-links'>
        {/* Mostrar enlaces solo en la página Home */}
        {isHomePage ? (
          <>
            <div className='social-media-links'>
              <div className="navbar-linkedin">
                <a 
                  href="https://www.linkedin.com/in/jon-madariaga-ortega" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  LinkedIn
                </a>
              </div>

              <div className="navbar-github">
                <a 
                  href="https://github.com/JonMada" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>
              </div>
            </div>

            <div className='navbar-list'>
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
        ) : (
          !isModalOpen && ( 
            <div className="navbar-item menu-modal-link" onClick={toggleModal}>
              {/* Botón de menú que abre el modal */}
              <span>Menu</span>
            </div>
          )
        )}
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <div className='social-media-links'>
              <div className="navbar-linkedin">
                <a 
                  href="https://www.linkedin.com/in/jon-madariaga-ortega" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  onClick={closeModal}
                >
                  LinkedIn
                </a>
              </div>

              <div className="navbar-github">
                <a 
                  href="https://github.com/JonMada" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  onClick={closeModal}
                >
                  GitHub
                </a>
              </div>
            </div>

            <div className='navbar-list'>
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
