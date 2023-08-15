import React from 'react';
import Navigation from './Navigation';
import '../styles/global.css';

const Header = () => {
    return (
        <header className="centered">
            <div className="header-content">
            <h1>John's Portfolio</h1>
            <Navigation />
            </div>
        </header>
    );
};

export default Header;