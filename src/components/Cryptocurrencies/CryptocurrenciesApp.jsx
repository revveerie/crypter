import React from 'react';
import { useState, useEffect } from "react";

import CoinCard from '../CoinCard/CoinCard.jsx';

const CryptocurrenciesApp = () => {
    const [appState, setAppState] = useState([]);
    const [inputValue, setInputValue] = useState('');

    useEffect(() => {
        fetch("https://coinranking1.p.rapidapi.com/coins?limit=100&referenceCurrencyUuid=yhjMzLPhuIDl", {
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "coinranking1.p.rapidapi.com",
                "x-rapidapi-key": "3327c598bbmsh9ee4085f61aad91p18cb75jsncdaeac2a2d8f"
            }
        })
        .then((response) => {
            response.json().then((json) => {
                setAppState(json.data.coins);
            })
        })
    }, [setAppState]);

    const card = appState.filter((coin) => {
        return coin.name.toLowerCase().includes(inputValue)
    });
    
    return (
        <>
            <div className='cryptocurrencies'>
            <div className='form'>
                <input
                    id='search'
                    type='text'
                    placeholder='Search Cryptocurency'
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