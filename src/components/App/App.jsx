import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';

import Homepage from '../Homepage/Homepage.jsx';
import CryptocurrenciesApp from '../Cryptocurrencies/CryptocurrenciesApp.jsx';
import ExchangesApp from '../Exchanges/ExchangesApp.jsx';
import NewsApp from '../News/NewsApp.jsx';
import Notfoundpage from '../NotFoundPage/NotFoundPage.jsx';


function App() {
    return (
        <header className='header'>
            <nav className='header__navigation navigation'>
                <div className="navigation__item">
                    <Link to='/' className='navigation__link'>Home</Link>
                </div>
                <div className="navigation__item">
                    <Link to='/Cryptocurrencies' className='navigation__link'>Cryptocurrencies</Link> 
                </div>
                <div className="navigation__item">
                    <Link to='/Exchanges' className='navigation__link'>Exchanges</Link>
                </div>
                <div className="navigation__item">
                    <Link to='/News' className='navigation__link'>News</Link>
                </div>
            </nav>            
            <Routes>
                <Route path='/' element={< Homepage />} />
                <Route path='/Exchanges' element={< ExchangesApp />} />
                <Route path='/Cryptocurrencies' element={< CryptocurrenciesApp />} />
                <Route path='/News' element={< NewsApp />}/>
                <Route path='*' element={< Notfoundpage />} />
            </Routes>
        </header>
    );
}

export default App;
