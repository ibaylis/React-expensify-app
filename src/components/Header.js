import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';

const Header = () => (
    <header className="header">
        <div className="content-container">
            <div className="header__content">
                <Link className="header__title" to="/dashboard"> 
                    <h1>Expensify</h1>
                </Link>
                <button>Logout</button>
            </div>
        </div>
    </header>
    );

    export default Header;