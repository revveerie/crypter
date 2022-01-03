import React from 'react';
import { useState, useEffect } from "react";
import axios from "axios";

import CoinCard from '../CoinCard/CoinCard.jsx';

const CryptocurrenciesApp = () => {
    const [inputValue, setInputValue] = useState('');
    const [coinList, setCoinList] = useState([]);

    useEffect(() => {
        const optionsCoins = {
            method: 'GET',
            url: 'https://coinranking1.p.rapidapi.com/coins',
            params: {
                timePeriod: '24h',
                limit: '100',
                offset: '0'
            },
            headers: {
              'x-rapidapi-host': 'coinranking1.p.rapidapi.com',
              'x-rapidapi-key': '3327c598bbmsh9ee4085f61aad91p18cb75jsncdaeac2a2d8f'
            }
          };
          
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