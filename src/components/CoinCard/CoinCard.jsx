import React from "react";
import { useEffect } from "react";

import coinChangeColor from '../../helpers/coinChangeColor.js';

const CoinCard = ({ name, iconUrl, price, change, symbol, coinrankingUrl }) => {
    useEffect(() => {
        coinChangeColor();
    });
    
    return (
        <>
            <a href={coinrankingUrl} className="coin-card__link" target="_blank">
                <div className="coin-card__name">{name}</div>
                <div className="coin-card__info-wrapper">
                    <div className="coin-card__icon">
                        <img src={iconUrl} alt={name} className="coin-card__image" />
                    </div>
                    <div className="coin-card__info">
                        <div className="coin-card__info-row">
                            <div className="coin-card__price">{Number(price).toFixed(2)}</div>
                            <div className="coin-card__symbol">{symbol}</div>
                        </div>
                        <div className="coin-card__info-row">
                            <div className="coin-card__change">{change}</div>
                        </div>
                    </div>
                </div>
            </a> 
        </>
    )
}

export default CoinCard;