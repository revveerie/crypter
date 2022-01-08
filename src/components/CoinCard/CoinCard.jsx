import React from "react";
import { useEffect } from "react";
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import coinChangeColor from '../../helpers/coinChangeColor.js';

const CoinCard = ({ name, iconUrl, price, change, symbol, coinrankingUrl, uuid }) => {
    useEffect(() => {
        coinChangeColor();
    });
    
    return (
        <>
            <Link key={uuid} to={`/CoinPage/${uuid}`}>
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
            </Link>
        </>
    )
}
CoinCard.propTypes = {
    name: PropTypes.string.isRequired,
    iconUrl: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    change: PropTypes.string.isRequired,
    symbol: PropTypes.string.isRequired,
    coinrankingUrl: PropTypes.string.isRequired,
}

export default CoinCard;