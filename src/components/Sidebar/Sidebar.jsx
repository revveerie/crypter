import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';

import navigationLinkClick from '../../helpers/menu.jsx';

const Sidebar = () => {
    navigationLinkClick();
    return (
        <header className='header'>
            <div className="header__logo-wrapper">
                <div className="header__logo">
                    <img src="../../assets/images/logo.svg" alt="Crypter" className='header__logo-image' />
                </div>
                <div className="header__name">
                    <p className="header__name-text">Crypter</p>
                </div>
            </div>
            <nav className='header__navigation navigation'>
                <div className="navigation__item">
                    <Link to='/' className='navigation__link'>
                        <img src="../../assets/images/home.png" alt="" className='navigation__link-image' />
                        <img src="../../assets/images/home-active.png" alt="" className='navigation__link-image navigation__link-image_hidden' />
                        <p className="navigation__link-text">Home</p>
                    </Link>
                </div>
                <div className="navigation__item">
                    <Link to='/Cryptocurrencies' className='navigation__link'>
                        <img src="../../assets/images/menu.png" alt="" className='navigation__link-image' />
                        <img src="../../assets/images/menu-active.png" alt="" className='navigation__link-image navigation__link-image_hidden' />
                        <p className="navigation__link-text">Cryptocurrencies</p>
                    </Link> 
                </div>
                <div className="navigation__item">
                    <Link to='/Exchanges' className='navigation__link'>
                        <img src="../../assets/images/exchange.png" alt="" className='navigation__link-image' />
                        <img src="../../assets/images/exchange-active.png" alt="" className='navigation__link-image navigation__link-image_hidden' />
                        <p className="navigation__link-text">Exchanges</p>
                    </Link>
                </div>
                <div className="navigation__item">
                    <Link to='/News' className='navigation__link'>
                        <img src="../../assets/images/searching.png" alt="" className='navigation__link-image' />
                        <img src="../../assets/images/searching-active.png" alt="" className='navigation__link-image navigation__link-image_hidden' />
                        <p className="navigation__link-text">News</p>
                    </Link>
                </div>
                <div className="navigation__indicator"></div>
            </nav>           
        </header>
    );
};

export default Sidebar;