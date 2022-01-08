import React from 'react';
import { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import axios from "axios";

import { getOptionsCoins, getOptionsNews, optionsNews } from '../../helpers/axiosOptions.js';
import numberFormat from "../../helpers/numberFormat.js";
import CoinCard from '../CoinCard/CoinCard.jsx';
import NewsCard from '../NewsCard/NewsCard.jsx';

const Homepage = () => {
    const [coinList, setCoinList] = useState([]);
    const [statsList, setStatsList] = useState([]);
    const [newsList, setNewsList] = useState([]);
    let cleanupFunction = false;

    const optionsCoins = getOptionsCoins(10);
    const optionsNews = getOptionsNews(10, 'Cryptocurencies');
    optionsCoins.params.limit = '10';
    optionsNews.params.count = '10';

    useEffect(() => {
        axios.request(optionsCoins).then(function (response) {
            if(!cleanupFunction) setCoinList(response.data.data.coins);
            if(!cleanupFunction) setStatsList(response.data.data.stats);
        }).catch(function (error) {
            console.error(error);
        });

        axios.request(optionsNews).then(function (response) {
            if(!cleanupFunction) setNewsList(response.data.value);
        }).catch(function (error) {
            console.error(error);
        });
        return () => cleanupFunction = true;
    }, []);

    return (
        <>
            <div className='homepage'>
                <div className="homepage__title">
                    <h2 className="homepage__title-text">
                        Global stats
                    </h2>
                </div>
                <div className="stat-card__wrapper">
                    <div className="stat-card">
                        <div className="stat-card__image">
                            <img src="../../assets/images/bitcoin.png" alt="Total coins" />
                        </div>
                        <div className="stat-card__info">
                            <div className="stat-card__title">
                                <p className="stat-card__title-text">Total coins</p>
                            </div>
                            <div className="stat-card__value">
                                <p className="stat-card__value-text">{statsList.totalCoins}</p>
                            </div>
                        </div>
                    </div>
                    <div className="stat-card">
                        <div className="stat-card__image">
                            <img src="../../assets/images/market.png" alt="Total markets" />
                        </div>
                        <div className="stat-card__info">
                            <div className="stat-card__title">
                                <p className="stat-card__title-text">Total markets</p>
                            </div>
                            <div className="stat-card__value">
                                <p className="stat-card__value-text">{statsList.totalMarkets}</p>
                            </div>
                        </div>
                    </div>
                    <div className="stat-card">
                        <div className="stat-card__image">
                            <img src="../../assets/images/exchange-coin.png" alt="Total exchanges" />
                        </div>
                        <div className="stat-card__info">
                            <div className="stat-card__title">
                                <p className="stat-card__title-text">Total exchanges</p>
                            </div>
                            <div className="stat-card__value">
                                <p className="stat-card__value-text">{statsList.totalExchanges}</p>
                            </div>
                        </div>
                    </div>
                    <div className="stat-card">
                        <div className="stat-card__image">
                            <img src="../../assets/images/bar-chart.png" alt="Total market cap" />
                        </div>
                        <div className="stat-card__info">
                            <div className="stat-card__title">
                                <p className="stat-card__title-text">Total market cap</p>
                            </div>
                            <div className="stat-card__value">
                                <p className="stat-card__value-text">{numberFormat(Number(statsList.totalMarketCap), 1)}</p>
                            </div>
                        </div>
                    </div>
                    <div className="stat-card">
                        <div className="stat-card__image">
                            <img src="../../assets/images/24hours.png" alt="Total cryptvolume (24h)" />
                        </div>
                        <div className="stat-card__info">
                            <div className="stat-card__title">
                                <p className="stat-card__title-text">24h volume</p>
                            </div>
                            <div className="stat-card__value">
                                <p className="stat-card__value-text">{numberFormat(Number(statsList.total24hVolume), 1)}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="homepage__title">
                    <h2 className="homepage__title-text">
                        Top 10 coins
                    </h2>
                    <div className="homepage__link-wrapper">
                        <Link to='/Cryptocurrencies' className='homepage__link homepage__link-coins'>All coins</Link>
                    </div>
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
                <div className="homepage__title">
                    <h2 className="homepage__title-text">
                        News
                    </h2>
                    <div className="homepage__link-wrapper">
                        <Link to='/News' className='homepage__link homepage__link-news'>All news</Link>
                    </div>
                </div>
                <div className="news-card__wrapper">
                    {
                        newsList.map((news, index) => {
                            return (
                                <div key={index} className='news-card'>
                                    <NewsCard 
                                        newsName={news.name}
                                        newsUrl={news.url}
                                        newsDescription={news.description}
                                        providerName={news.provider[0].name}
                                        publishedDate={news.datePublished.substring(0, 10)+' '+news.datePublished.substring(11, 16)}      
                                    />
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
