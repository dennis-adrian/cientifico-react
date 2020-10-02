import React from 'react';
import { Link } from 'react-router-dom';

export const Header = () => (
    <header className="Header">
        <div className="Header-main">
            <div className="Header-logo">
                <h1>
                    <Link to={`/`}>
                        100tifi.co
                    </Link>
                </h1>
            </div>
            <div className="Header-nav">
                <Link to={`/about/`}>
                    About
                </Link>
            </div>
        </div>
    </header>
)
