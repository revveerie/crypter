import React from 'react';
import { useState, useEffect } from "react";
import axios from "axios";

import CoinCard from '../CoinCard/CoinCard.jsx';
import NewsCard from '../NewsCard/NewsCard.jsx';

const Homepage = () => {

    const [coinList, setCoinList] = useState([]);
    const [statsList, setStatsList] = useState([]);
    const [newsList, setNewsList] = useState([]);

    function nFormatter(num, digits) {
    
        const lookup = [
            { value: 1, symbol: '' },
            { value: 1e3, symbol: 'k' },
            { value: 1e6, symbol: 'M' },
            { value: 1e9, symbol: 'B' },
            { value: 1e12, symbol: 'T' },
            { value: 1e15, symbol: 'P' },
            { value: 1e18, symbol: 'E' }
        ];
    
        const rx = /\.0+$|(\.[0-9]*[1-9])0+$/;
    
        const item = lookup.slice().reverse().find(function (item) {
            return num >= item.value;
        });
    
        return item ? (num / item.value).toFixed(digits).replace(rx, '$1') + item.symbol : '0';
    }

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

        const optionsNews = {
            method: 'GET',
            url: 'https://bing-news-search1.p.rapidapi.com/news/search',
            params: {
                q: 'Cryptocurrencies',
                safeSearch: 'Moderate',
                textFormat: 'Raw',
                freshness: 'Week',
                count: '10',
                sortBy: 'Date',
            },
            headers: {
                'accept-language': 'en',
                'x-bingapis-sdk': 'true',
                'x-rapidapi-host': 'bing-news-search1.p.rapidapi.com',
                'x-rapidapi-key': 'dbd484c3camshda218e5f7671c8dp17ca79jsn03298ac7b16b'
            }
          };
        axios.request(optionsCoins).then(function (response) {
            setCoinList(response.data.data.coins);
            setStatsList(response.data.data.stats);
        }).catch(function (error) {
            console.error(error);
        });

        axios.request(optionsNews).then(function (response) {
            setNewsList(response.data.value);
        }).catch(function (error) {
                console.error(error);
        });
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
                            <img src="../../assets/images/cryptocurrency.png" alt="Total coins" />
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
                            <img src="../../assets/images/blockchain.png" alt="Total markets" />
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
                            <img src="../../assets/images/zcash.png" alt="Total exchanges" />
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
                            <img src="../../assets/images/trader.png" alt="Total market cap" />
                        </div>
                        <div className="stat-card__info">
                            <div className="stat-card__title">
                                <p className="stat-card__title-text">Total market cap</p>
                            </div>
                            <div className="stat-card__value">
                                <p className="stat-card__value-text">{nFormatter(Number(statsList.totalMarketCap), 1)}</p>
                            </div>
                        </div>
                    </div>
                    <div className="stat-card">
                        <div className="stat-card__image">
                            <img src="../../assets/images/24-hours.png" alt="Total cryptvolume (24h)" />
                        </div>
                        <div className="stat-card__info">
                            <div className="stat-card__title">
                                <p className="stat-card__title-text">Total cryptvolume</p>
                            </div>
                            <div className="stat-card__value">
                                <p className="stat-card__value-text">{nFormatter(Number(statsList.total24hVolume), 1)}</p>
                            </div>
                        </div>
                    </div>
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
                <div className="homepage__title">
                    <h2 className="homepage__title-text">
                        News
                    </h2>
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
