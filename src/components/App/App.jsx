import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';

import Homepage from '../Homepage/Homepage.jsx';
import Sidebar from '../Sidebar/Sidebar.jsx';
import CryptocurrenciesApp from '../Cryptocurrencies/CryptocurrenciesApp.jsx';
import ExchangesApp from '../Exchanges/ExchangesApp.jsx';
import NewsApp from '../News/NewsApp.jsx';
import Notfoundpage from '../NotFoundPage/NotFoundPage.jsx';

function App() {
    return (
        <>
            <Sidebar/>
            <Routes>
                <Route path='/' element={< Homepage />} />
                <Route path='/Exchanges' element={< ExchangesApp />} />
                <Route path='/Cryptocurrencies' element={< CryptocurrenciesApp />} />
                <Route path='/News' element={< NewsApp />}/>
                <Route path='*' element={< Notfoundpage />} />
            </Routes>
        </>
    );
}

export default App;