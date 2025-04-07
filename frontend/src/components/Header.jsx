import React, { useState } from 'react';
import '../styles/Header.css';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header className="header">
            <a href="#" className="logo">
                <i className="fa-solid fa-code"></i> PORTFOLIO
            </a>
            <nav className={`navbar ${isMenuOpen ? 'active' : ''}`}>
                <a href="#about" className="active">
                    <i className="fa-solid fa-user"></i> About
                </a>
                <a href="#skills">
                    <i className="fa-solid fa-laptop-code"></i> Skills
                </a>
                <a href="#education">
                    <i className="fa-solid fa-graduation-cap"></i> Education
                </a>
                <a href="#interests">
                    <i className="fa-solid fa-heart"></i> Interests
                </a>
                <a href="#contact">
                    <i className="fa-solid fa-envelope"></i> Contact
                </a>
            </nav>
            <div className="menu-icon" onClick={toggleMenu}>
                <i className={`fa-solid ${isMenuOpen ? 'fa-times' : 'fa-bars'}`}></i>
            </div>
        </header>
    );
};

export default Header;
