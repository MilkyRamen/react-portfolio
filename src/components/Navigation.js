import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/global.css';

const Navigation = () => {
    return (
        <nav className="navigation">
            <div className="nav-links">
            <Link to="/">About Me</Link>
            <Link to="/portfolio">Portfolio</Link>
            <Link to="/contact">Contact Me</Link>
            </div>
        </nav>
    );
};

export default Navigation;