import React from 'react';
import { useParams } from 'react-router-dom';
import { useState, useEffect, useRef } from "react";
import { Line } from 'react-chartjs-2';
import axios from "axios";
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

import TimeInterval from '../TimeInterval/TimeInterval.jsx';
import numberFormat from "../../helpers/numberFormat.js";
import dateFormat from "../../helpers/dateFormat.js";
import coinChangeColorP from "../../helpers/coinChangeColorP.js";
import { getOptionsCoin, getOptionsHistory } from '../../helpers/axiosOptions.js';

import PriceImg from '../../assets/images/price-tag.png';
import MarketImgD from '../../assets/images/market.png';
import ExchangeImgD from '../../assets/images/exchange-coin.png';
import VolumeImgD from '../../assets/images/24hours.png';
import MarketCapImgD from '../../assets/images/bar-chart.png';

const CoinPage = () => {
    const { coinId } = useParams();
    const [coinInfo, setCoinInfo] = useState([]);
    const [coinHistory, setCoinHitsory] = useState([]);
    const [timeInterval, setTimeInterval] = useState('24h');
    const firstRender = useRef(true);
    const optionsInfo = getOptionsCoin(coinId);
    const optionsHistory = getOptionsHistory(coinId, timeInterval);

    let cleanupFunction = false;

    useEffect(() => {
        if (firstRender.current) {
            firstRender.current = false;
        } else {
            axios.request(optionsHistory).then(function (response) {
                if(!cleanupFunction) setCoinHitsory(response.data.data);
            }).catch(function (error) {
                console.error(error);
            });
        }
    }, [timeInterval]);

    useEffect(() => {
        axios.request(optionsHistory).then(function (response) {
            if(!cleanupFunction) setCoinHitsory(response.data.data);
        }).catch(function (error) {
            console.error(error);
        });

        axios.request(optionsInfo).then(function (response) {
            if(!cleanupFunction) setCoinInfo(response.data.data.coin);
        }).catch(function (error) {
            console.error(error);
        });
        return () => cleanupFunction = true;
    }, [])

    useEffect(() => {
        coinChangeColorP();
    });

    const timeChangeHandler = (option) => {
        setTimeInterval(option)
    }
    
    const data = {
        labels: coinHistory?.history?.map(history=>dateFormat(history.timestamp)),
        datasets: [
            {
                backgroundColor: 'rgb(255 255 255)',
                borderColor: 'rgb(83 185 234)',
                label: 'Price (USD)',
                fill: false,
                lineTension: 0.5,
                borderWidth: 1,
                data: coinHistory?.history?.map(history=>history.price)
            }
        ]
    };

    const options = {
        responsive: true,
        maintainAspectRatio: true
    }
      
    return (
        <>
            <div className="coin-info">
                <div className="coin-info__title">
                    <div className="coin-info__image">
                        <img src={coinInfo.iconUrl} alt={coinInfo.name} />
                    </div>
                    <div className="coin-info__name">
                        <p className="coin-info__name-text">
                            {coinInfo.name}
                        </p>
                    </div>
                </div>
                <div className="stat-card__wrapper">
                    <div className="stat-card">
                        <div className="stat-card__image">
                            <img src={`../${PriceImg}`} alt="Price" />
                        </div>
                        <div className="stat-card__info">
                            <div className="stat-card__title">
                                <p className="stat-card__title-text">Price</p>
                            </div>
                            <div className="stat-card__value">
                                <p className="stat-card__value-text">{Number(coinInfo.price).toFixed(2)}</p>
                            </div>
                        </div>
                    </div>
                    <div className="stat-card">
                        <div className="stat-card__image">
                            <img src={`../${MarketImgD}`} alt="Total markets" />
                        </div>
                        <div className="stat-card__info">
                            <div className="stat-card__title">
                                <p className="stat-card__title-text">Total markets</p>
                            </div>
                            <div className="stat-card__value">
                                <p className="stat-card__value-text">{coinInfo.numberOfMarkets}</p>
                            </div>
                        </div>
                    </div>
                    <div className="stat-card">
                        <div className="stat-card__image">
                            <img src={`../${ExchangeImgD}`} alt="Total exchanges" />
                        </div>
                        <div className="stat-card__info">
                            <div className="stat-card__title">
                                <p className="stat-card__title-text">Total exchanges</p>
                            </div>
                            <div className="stat-card__value">
                                <p className="stat-card__value-text">{coinInfo.numberOfExchanges}</p>
                            </div>
                        </div>
                    </div>
                    <div className="stat-card">
                        <div className="stat-card__image">
                            <img src={`../${VolumeImgD}`} alt="24h volume" />
                        </div>
                        <div className="stat-card__info">
                            <div className="stat-card__title">
                                <p className="stat-card__title-text">24h volume</p>
                            </div>
                            <div className="stat-card__value">
                                <p className="stat-card__value-text">{numberFormat(Number(coinInfo["24hVolume"]))}</p>
                            </div>
                        </div>
                    </div>
                    <div className="stat-card">
                        <div className="stat-card__image">
                            <img src={`../${MarketCapImgD}`} alt="Total market cap" />
                        </div>
                        <div className="stat-card__info">
                            <div className="stat-card__title">
                                <p className="stat-card__title-text">Total marketcap</p>
                            </div>
                            <div className="stat-card__value">
                                <p className="stat-card__value-text">{numberFormat(coinInfo.marketCap)}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="coin-info__description" dangerouslySetInnerHTML={{ __html: coinInfo.description }}></div>
                <div className="coin-info__price-chart">
                    <h3>{coinInfo.name} price chart</h3>
                    <div className='time-interval__row'>
                        <TimeInterval optionsList={['24h', '7d', '30d']} onClick={timeChangeHandler} />
                        <div className="time-interval__change">
                            <div className="time-interval__change-value coin-card__change">{coinHistory.change}</div>
                        </div>
                    </div>
                </div>
                <div className="canvas">
                    <Line data={data} options={options} />
                </div>
            </div>
        </>
    )
}

export default CoinPage;