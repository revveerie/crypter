import React from 'react';
import { useState, useEffect } from "react";
import axios from "axios";

import { optionsCoins } from '../../helpers/axiosOptions.js';
import CoinCard from '../CoinCard/CoinCard.jsx';

const CryptocurrenciesApp = () => {
    const [inputValue, setInputValue] = useState('');
    const [coinList, setCoinList] = useState([]);

    optionsCoins.params.limit = '100';

    useEffect(() => {
          axios.request(optionsCoins).then(function (response) {
                setCoinList(response.data.data.coins);
          }).catch(function (error) {
              console.error(error);
          });
    }, []);

    const card = coinList.filter((coin) => {
        return coin.name.toLowerCase().includes(inputValue)
    });
    
    return (
        <>
            <div className='cryptocurrencies'>
                <div className='cryptocurrencies__input'>
                    <input
                        id='search'
                        type='text'
                        placeholder='Type coin name here'
                        onChange={(event) => setInputValue(event.target.value)}
                    />                
                </div>
                <div className="coin-card__wrapper">
                    {
                        card.map((coin, index) => {
                            return (
                                <div key={index} className='coin-card'>
                                    <CoinCard {...coin} />
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </>
    );
};

export default CryptocurrenciesApp;