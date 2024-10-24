import React from 'react';
import { useLocation } from 'react-router-dom';

const Footer = ({projectId}) => {
    const location = useLocation();
    const isPrivacyPage = location.pathname === '/privacy-policy'; 
    const isWorksPage = location.pathname === '/works';
    const isProjectPage = location.pathname === `/project/${projectId}`;

    
    return (
        <footer className={`footer ${isPrivacyPage || isWorksPage ||isProjectPage? 'privacy-footer' : ''}`}>
            <div className="footer-content">
                <div className='nav-links'>
                    <a href='/cv'>About me</a>
                    <a href='/works'>Works</a>
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
                    <a href="/privacy-policy">Privacy Policy</a>
                    <a href="/terms-of-service">Terms of Service</a>
                    <a href="/contact">Contact Me</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
