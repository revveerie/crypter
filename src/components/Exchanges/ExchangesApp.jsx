import React from 'react';
import axios from "axios";
import { useState, useEffect } from "react";

import numberFormat from "../../helpers/numberFormat.js";
import ExchangeCard from '../ExchangeCard/ExchangeCard.jsx';

const ExchangesApp = () => {

    const [exchangeList, setExchangeList] = useState([]);
      
    useEffect(() => {
        const options = {
            method: 'GET',
            url: 'https://coinranking1.p.rapidapi.com/exchange/-zdvbieRdZ/coins',
            params: {
              referenceCurrencyUuid: 'yhjMzLPhuIDl',
              limit: '100',
              offset: '0',
              orderBy: '24hVolume',
              orderDirection: 'desc'
            },
            headers: {
              'x-rapidapi-host': 'coinranking1.p.rapidapi.com',
              'x-rapidapi-key': '3327c598bbmsh9ee4085f61aad91p18cb75jsncdaeac2a2d8f'
            }
        };
          
        axios.request(options).then(function (response) {
            setExchangeList(response.data.data.coins);
        }).catch(function (error) {
            console.error(error);
        });
    }, []);

    return (
        <>
            <div className='exchange'>
                <div className="exchange-card__wrapper">
                    <div className="exchange-card exchange-card_head">
                        <div className="exchange-card__column">
                            <div className="exchange-card__rank exchange-card__item">
                                <p className="exchange-card__rank-text">#</p>
                            </div>
                            <div className="exchange-card__image exchange-card__item">
                                <p className="exchange-card__image-text">Icon</p>
                            </div>
                        </div>
                        <div className="exchange-card__column">
                            <div className="exchange-card__title exchange-card__item">
                                <p className="exchange-card__title-text">Name</p>
                            </div>
                            <div className="exchange-card__markets exchange-card__item">
                                <p className="exchange-card__markets-text">Markets</p>
                            </div>
                            <div className="exchange-card__volume exchange-card__item">
                                <p className="exchange-card__volume-text">24h volume</p>
                            </div>
                        </div>
                    </div>
                    
                    {
                        exchangeList.map((exchange, index) => {
                            return (
                                <div key={index} className='exchange-card'>
                                    <ExchangeCard
                                        iconUrl={exchange.iconUrl}
                                        rank={exchange.rank}
                                        name={exchange.name}
                                        numberOfMarkets={exchange.numberOfMarkets}
                                        volume24={numberFormat(Number(exchange["24hVolume"]), 1)}
                                    />
                                </div>
                            )
                        })
                    }
                </div>
            
            </div>
        </>
    )
};

export default ExchangesApp;