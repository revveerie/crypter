import React from "react";
import PropTypes from 'prop-types';

const ExchangeCard = ({ rank, name, marketCap , volume24, iconUrl }) => {
    return (
        <>
            <div className="exchange-card">
                <div className="exchange-card__column">
                    <div className="exchange-card__rank exchange-card__item">
                        <p className="exchange-card__rank-text">{rank}.</p>
                    </div>
                    <div className="exchange-card__image exchange-card__item">
                        <img src={iconUrl} alt={name} />
                    </div>
                </div>
                <div className="exchange-card__column">
                    <div className="exchange-card__title exchange-card__item">
                        <p className="exchange-card__hidden">Coin name</p>
                        <p className="exchange-card__title-text">{name}</p>
                    </div>
                    <div className="exchange-card__markets exchange-card__item">
                        <p className="exchange-card__hidden">Market Cap</p>
                        <p className="exchange-card__markets-text">{marketCap}</p>
                    </div>
                    <div className="exchange-card__volume exchange-card__item">
                        <p className="exchange-card__hidden">24h volume</p>
                        <p className="exchange-card__volume-text">{volume24}</p>
                    </div>
                </div>
            </div>
        </>
    )
}

ExchangeCard.propTypes = {
    rank: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    marketCap: PropTypes.string.isRequired,
    volume24: PropTypes.string.isRequired,
    iconUrl: PropTypes.string.isRequired
}

export default ExchangeCard;