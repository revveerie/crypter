import React from "react";
import { useState, useEffect } from "react";

const CoinCard = ({ name, iconUrl, price, change, symbol }) => {
    price = Number(price).toFixed(2);
    useEffect(() => {
        change = Number(change);
        let coinChange = document.querySelectorAll('.coin-card__change');
        coinChange.forEach((coinChange) => {
            let coinChangeValue = Number(coinChange.textContent);
            if (coinChangeValue < 0) {
                coinChange.classList.add('change-red');
            }
            else {
                coinChange.classList.add('change-green');
            }
        });
    });
    return (
        <>
            <div className="coin-card__icon">
                <img src={iconUrl} alt={name} className="coin-card__image" />
            </div>
            <div className="coin-card__info">
                <div className="coin-card__info-row">
                    <div className="coin-card__price">{price}</div>
                    <div className="coin-card__symbol">{symbol}</div>
                </div>
                 <div className="coin-card__info-row">
                    <div className="coin-card__change">{change}</div>
                </div>
            </div>
        </>
    )
}

export default CoinCard;