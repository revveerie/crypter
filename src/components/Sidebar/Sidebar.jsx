import React from 'react';
import { NavLink } from 'react-router-dom';

import LogoImg from '../../assets/images/logo.svg';
import HomeImg from '../../assets/images/home.png';
import HomeImgActive from '../../assets/images/home-active.png';
import CoinImg from '../../assets/images/menu.png';
import CoinImgActive from '../../assets/images/menu-active.png';
import ExchangeImg from '../../assets/images/exchange.png';
import ExchangeImgActive from '../../assets/images/exchange-active.png';
import NewsImg from '../../assets/images/searching.png';
import NewsImgActive from '../../assets/images/searching-active.png';

const Sidebar = () => {
    return (
        <header className="header">
            <div className="header__logo-wrapper">
                <div className="header__logo">
                    <img src={LogoImg} alt="Crypter" className='header__logo-image' />
                </div>
                <div className="header__name">
                    <p className="header__name-text">Crypter</p>
                </div>
            </div>
            <nav className='header__navigation navigation'>
                <NavLink className={({ isActive }) =>
                    isActive ? 'current navigation__link' : 'inactive navigation__link'}
                    to='/'>
                    <img src={HomeImg} className='navigation__image'/>
                    <img src={HomeImgActive} className='navigation__image-active'/>
                    <p className='navigation__link-text'>Home</p>
                </NavLink>
                <NavLink className={({ isActive }) =>
                    isActive ? 'current navigation__link' : 'inactive navigation__link'}
                    to='/Cryptocurrencies'>
                    <img src={CoinImg} className='navigation__image'/>
                    <img src={CoinImgActive} className='navigation__image-active'/>
                    <p className='navigation__link-text'>Cryptocurrencies</p>
                </NavLink>
                <NavLink className={({ isActive }) =>
                    isActive ? 'current navigation__link' : 'inactive navigation__link'}
                    to='/Exchanges'>
                    <img src={ExchangeImg} className='navigation__image'/>
                    <img src={ExchangeImgActive} className='navigation__image-active'/>
                    <p className='navigation__link-text'>Exchanges</p>
                </NavLink>
                <NavLink className={({ isActive }) =>
                    isActive ? 'current navigation__link' : 'inactive navigation__link'}
                    to='/News'>
                    <img src={NewsImg} className='navigation__image'/>
                    <img src={NewsImgActive} className='navigation__image-active'/>
                    <p className='navigation__link-text'>News</p>
                </NavLink>
                <div className="navigation__indicator"></div>
            </nav>
        </header>   
    )
};

export default Sidebar;