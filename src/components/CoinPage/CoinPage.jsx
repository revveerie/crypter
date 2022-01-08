import React from 'react';
import { useParams } from 'react-router-dom';
import { useState, useEffect, useRef } from "react";
import axios from "axios";
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';
import { Line } from 'react-chartjs-2';
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);
import TimeInterval from '../TimeInterval/TimeInterval.jsx';
import numberFormat from "../../helpers/numberFormat.js";
import { getOptionsCoin, getOptionsHistory } from '../../helpers/axiosOptions.js';

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

    function dFormatter(milisecond) {
        let epoch = new Date(0);
        epoch.setSeconds(parseInt(milisecond));
        var date = epoch.toISOString();
        date = date.replace('T', ' ');
        return date.split('.')[0].split(' ')[0] + ' ' + epoch.toLocaleTimeString().split(' ')[0];
    }

    const timeChangeHandler = (option) => {
        setTimeInterval(option)
    }
    
    const data = {
        labels: coinHistory?.history?.map(history=>dFormatter(history.timestamp)),
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

    useEffect(() => {
        function coinChangeColor () {
            let value = document.querySelector('.coin-card__change').textContent;
            let change = Number(value);
            let coinChange = document.querySelector('.coin-card__change');
                if (change < 0) {
                    if (coinChange.classList.contains('change-green')) {
                        coinChange.classList.remove('change-green');
                        coinChange.classList.add('change-red');
                    }
                    else
                        coinChange.classList.add('change-red');
                }
                else {
                    if (coinChange.classList.contains('change-red')) {
                        coinChange.classList.remove('change-red');
                        coinChange.classList.add('change-green');
                    }
                    else
                        coinChange.classList.add('change-green');
                }
        }
        coinChangeColor();
    });
      
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
                            <img src="../../assets/images/price-tag.png" alt="Price" />
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
                            <img src="../../assets/images/market.png" alt="Total markets" />
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
                            <img src="../../assets/images/exchange-coin.png" alt="Total exchanges" />
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
                            <img src="../../assets/images/24hours.png" alt="24h volume" />
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
                            <img src="../../assets/images/bar-chart.png" alt="Total market cap" />
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
                <div className="coin-info__links">
                    .
                </div>
            </div>
        </>
    )
}

export default CoinPage;