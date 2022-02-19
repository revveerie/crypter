import React from 'react';
import axios from "axios";
import { useState, useEffect } from "react";

import numberFormat from "../../helpers/numberFormat.js";
import ExchangeCard from '../ExchangeCard/ExchangeCard.jsx';
import { optionsExchanges } from '../../helpers/axiosOptions.js';

const ExchangesApp = () => {
    const [exchangeList, setExchangeList] = useState([]);
    let cleanupFunction = false;

    useEffect(() => {
        axios.request(optionsExchanges).then(function (response) {
            if(!cleanupFunction) setExchangeList(response.data.data.coins);
        }).catch(function (error) {
            console.error(error);
        });
        return () => cleanupFunction = true;
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
                                <p className="exchange-card__markets-text">Market Cap</p>
                            </div>
                            <div className="exchange-card__volume exchange-card__item">
                                <p className="exchange-card__volume-text">24h volume</p>
                            </div>
                        </div>
                    </div>
                    {
                        exchangeList.map((exchange, index) => {
                            return (
                                <div key={index} className='exchange-card__wrap'>
                                    <ExchangeCard
                                        iconUrl={exchange.iconUrl}
                                        rank={exchange.rank}
                                        name={exchange.name}
                                        marketCap={numberFormat(Number(exchange["marketCap"]), 1)}
                                        volume24={numberFormat(Number(exchange["24hVolume"]), 1)}
                                        uuid={exchange.uuid}
                                        description={exchange.description}
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