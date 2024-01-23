// Header.js
import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <nav>
            <h1>My Portfolio</h1>
            <ul>
                <li><Link to="/">About Me</Link></li>
                <li><Link to="/projects">Projects</Link></li>
                <li><Link to="/blog">Blog</Link></li>
                <li><Link to="/contact">Contact</Link></li>
            </ul>
        </nav>
    );
}

export default Header;
