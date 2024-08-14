import React from 'react';
import './Footer.scss';

function Footer({ currentPage }) {
    let pageClass = '';
    // Determine the appropriate class based on the current page
    if (currentPage === '/contact') {
        pageClass = 'footer--contact';
    } else if (currentPage === '/about') {
        pageClass = 'footer--about';
    } else if (currentPage === '/projects') {
        pageClass = 'footer--projects';
    } else {
        pageClass = 'footer--home'; // Default class for home or any other unspecified route
    }

    return (
        <footer className={`footer ${pageClass}`}>
            <div className="footer-container">
                <a href="https://github.com/joleana" className="footer-link" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-github-square"></i>
                </a>
                <a href="https://www.linkedin.com/in/joleana-shurley/" target="_blank" rel="noreferrer">
                    <i className="fab fa-linkedin-in"></i>
                </a>
            </div>
        </footer>
    );
}

export default Footer;