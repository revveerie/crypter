import React from 'react';
import { useState, useEffect } from "react";

import CoinCard from '../CoinCard/CoinCard.jsx';
import StatCard from '../StatCard/StatCard.jsx';

const Homepage = () => {
    const [appState, setAppState] = useState([]);
    const [statState, setStatState] = useState([]);

    useEffect(() => {
        fetch("https://coinranking1.p.rapidapi.com/coins?limit=10&referenceCurrencyUuid=yhjMzLPhuIDl", {
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "coinranking1.p.rapidapi.com",
                "x-rapidapi-key": "3327c598bbmsh9ee4085f61aad91p18cb75jsncdaeac2a2d8f"
            }
        })
        .then((response) => {
            response.json().then((json) => {
                setAppState(json.data.coins);
                setStatState(json.data.stats);
            })
        })
    }, [setAppState, setStatState]);
    
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
                        appState.map((coin, index) => {
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
