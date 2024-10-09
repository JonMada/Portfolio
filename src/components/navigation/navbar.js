import React from 'react';
import { Link } from 'react-router-dom';
import icon from '../../assets/images/icon.png'; 


const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-icon">
        <Link to="/">
          <img src={icon} alt="Icon" className="navbar-logo" />
        </Link>
      </div>

      <div className='nav-bar-links'>

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
            <Link to="/seccion2">Sección 2</Link>
            </div>
            <div className="navbar-item">
            <Link to="/seccion3">Sección 3</Link>
            </div>
        </div>
        

      </div>
    
    </nav>
  );
};

export default Navbar;
