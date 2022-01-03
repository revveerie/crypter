import React from 'react';
import { useState, useEffect } from "react";
import axios from "axios";

import CoinCard from '../CoinCard/CoinCard.jsx';

const Homepage = () => {

    const [coinList, setCoinList] = useState([]);

    useEffect(() => {
        const optionsCoins = {
            method: 'GET',
            url: 'https://coinranking1.p.rapidapi.com/coins',
            params: {
                timePeriod: '24h',
                limit: '10',
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

    return (
        <>
            <div className='homepage'>
                <div className="homepage__title">
                    <h2 className="homepage__title-text">
                        Stats
                    </h2>
                </div>
                <div className="stat-card__wrapper">

                </div>
                <div className="homepage__title">
                    <h2 className="homepage__title-text">
                        Top 10 coins
                    </h2>
                </div>
                <div className="coin-card__wrapper">
                    {
                        coinList.map((coin, index) => {
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
    )
}

export default Homepage;
