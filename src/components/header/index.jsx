import React from 'react';
import { Link } from 'react-router-dom';
import './index.scss';

const Header = () => {
    return (
        <header>
            <nav>
            <div className='logo'><Link to="/">logo</Link></div>
                <ul>
                    <li>Home</li>
                    <li>Recentes</li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;