import React from "react";

const ExchangeCard = ({ rank, name, numberOfMarkets , volume24, iconUrl }) => {
    return (
        <>
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
                    <p className="exchange-card__hidden">Markets</p>
                    <p className="exchange-card__markets-text">{numberOfMarkets}</p>
                </div>
                <div className="exchange-card__volume exchange-card__item">
                    <p className="exchange-card__hidden">24h volume</p>
                    <p className="exchange-card__volume-text">{volume24}</p>
                </div>
            </div>
        </>
    )
}

export default ExchangeCard;