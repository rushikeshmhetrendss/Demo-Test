import React, { useState } from "react";
import { Link } from "react-router-dom"; // Optional, if you're using React Router

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header className="navbar">
            <div className="navbar-container">
                <div className="logo">
                    <h1>MyApp</h1>
                </div>
                <nav className={`nav-links ${isMenuOpen ? "active" : ""}`}>
                    <ul>
                        <li>
                            <Link to="/" className="nav-link">
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link to="/about" className="nav-link">
                                About
                            </Link>
                        </li>
                        <li>
                            <Link to="/services" className="nav-link">
                                Services
                            </Link>
                        </li>
                        <li>
                            <Link to="/contact" className="nav-link">
                                Contact
                            </Link>
                        </li>
                    </ul>
                </nav>
                <div className="hamburger" onClick={toggleMenu}>
                    <span className="bar"></span>
                    <span className="bar"></span>
                    <span className="bar"></span>
                </div>
            </div>
        </header>
    );
};

export default Navbar;
