import React from 'react';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
    return (
        <header className="header">
            <div className="header__logo-wrapper">
                <div className="header__logo">
                    <img src="../../assets/images/logo.svg" alt="Crypter" className='header__logo-image' />
                </div>
                <div className="header__name">
                    <p className="header__name-text">Crypter</p>
                </div>
            </div>
            <nav className='header__navigation navigation'>
                <NavLink className={({ isActive }) =>
                    isActive ? 'current navigation__link' : 'inactive navigation__link'}
                    to='/'>
                    <img src="../../assets/images/home.png" className='navigation__image'/>
                    <img src="../../assets/images/home-active.png" className='navigation__image-active'/>
                    <p className='navigation__link-text'>Home</p>
                </NavLink>
                <NavLink className={({ isActive }) =>
                    isActive ? 'current navigation__link' : 'inactive navigation__link'}
                    to='/Cryptocurrencies'>
                    <img src="../../assets/images/menu.png" className='navigation__image'/>
                    <img src="../../assets/images/menu-active.png" className='navigation__image-active'/>
                    <p className='navigation__link-text'>Cryptocurrencies</p>
                </NavLink>
                <NavLink className={({ isActive }) =>
                    isActive ? 'current navigation__link' : 'inactive navigation__link'}
                    to='/Exchanges'>
                    <img src="../../assets/images/exchange.png" className='navigation__image'/>
                    <img src="../../assets/images/exchange-active.png" className='navigation__image-active'/>
                    <p className='navigation__link-text'>Exchanges</p>
                </NavLink>
                <NavLink className={({ isActive }) =>
                    isActive ? 'current navigation__link' : 'inactive navigation__link'}
                    to='/News'>
                    <img src="../../assets/images/searching.png" className='navigation__image'/>
                    <img src="../../assets/images/searching-active.png" className='navigation__image-active'/>
                    <p className='navigation__link-text'>News</p>
                </NavLink>
                <div className="navigation__indicator"></div>
            </nav>
        </header>   
    )
};

export default Sidebar;