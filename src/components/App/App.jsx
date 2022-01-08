import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Homepage from '../Homepage/Homepage.jsx';
import Sidebar from '../Sidebar/Sidebar.jsx';
import CryptocurrenciesApp from '../Cryptocurrencies/CryptocurrenciesApp.jsx';
import ExchangesApp from '../Exchanges/ExchangesApp.jsx';
import NewsApp from '../News/NewsApp.jsx';
import Notfoundpage from '../NotFoundPage/NotFoundPage.jsx';
import CoinPage from '../CoinPage/CoinPage.jsx';

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
                <Route path="/CoinPage/:coinId" element={< CoinPage />} />
            </Routes>
        </>
    );
}

export default App;
