import React from 'react';
import { Link } from 'react-router-dom';
import "./header.styles.scss";

const Header = () => {
    return (
        <nav className="header">
            <Link to="/">About</Link>
            <Link to="/todo">TODO</Link>
        </nav>
    );
};

export default Header;
