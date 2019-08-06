import React from 'react';
import './styles.css';

const Header = () => (
    <header id="main-header">
        <div className="container">
            <div className="header-content">
                <h1><a href="/">Productize</a></h1>
                <a id="create-btn" href="/products/create">Create</a>
            </div>
        </div>
    </header>
);

export default Header;