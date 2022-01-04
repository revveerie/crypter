import React from "react";
import { useState, useEffect } from "react";

const NewsCard = ({ newsName, newsUrl, newsDescription, providerName, providerUrl, publishedDate }) => {
    return (
        <>
            <a href={newsUrl} className="news-card__link" target="_blank">
                <div className="news-card__title">
                    <p className="news-card__title-text">{newsName}</p>
                </div>
                <div className="news-card__date">
                    <p className="news-card__date-text">{publishedDate}</p>
                </div>
            </a>
            <div className='news-card__description'>
                <p className='news-card__description-text'>{newsDescription}</p>
            </div>
        </>
    )
}

export default NewsCard;