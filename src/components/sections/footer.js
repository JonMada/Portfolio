import React from 'react';
import { useLocation, Link } from 'react-router-dom';

const Footer = ({projectId}) => {
    const location = useLocation();
    const isPrivacyPage = location.pathname === '/privacy-policy'; 
    const isWorksPage = location.pathname === '/works';
    const isProjectPage = location.pathname === `/project/${projectId}`;
    const isTermsPage = location.pathname ==='/terms-of-service';

    
    return (
        <footer className={`footer ${isPrivacyPage || isWorksPage ||isProjectPage || isTermsPage? 'privacy-footer' : ''}`}>
            <div className="footer-content">
                <div className='nav-links'>
                    <Link to='/cv'>About me</Link>
                    <Link to='/works'>Works</Link>
                    <a 
                        href="https://www.linkedin.com/in/jon-madariaga-ortega" 
                        target="_blank" 
                        rel="noopener noreferrer"
                    >
                        LinkedIn
                    </a>
                    <a 
                        href="https://github.com/JonMada" 
                        target="_blank" 
                        rel="noopener noreferrer"
                    >
                        GitHub
                    </a>
                </div>
                <p>&copy; {new Date().getFullYear()} Jon Madariaga Ortega. All Rights Reserved.</p>
                <div className="footer-links">
                    <Link to="/privacy-policy">Privacy Policy</Link>
                    <Link to="/terms-of-service">Terms of Service</Link>
                    <Link to="/contact">Contact Me</Link>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
