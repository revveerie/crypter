import React from "react";
import PropTypes from 'prop-types';

const NewsCard = ({ newsName, newsUrl, newsDescription, publishedDate }) => {
    return(
        <>
            <a href={newsUrl} className="news-card__link" target="_blank" rel="noreferrer">
                <div className="news-card__title">
                    <p className="news-card__title-text">{newsName}</p>
                </div>
                <div className="news-card__date">
                    <p className="news-card__date-text">{publishedDate}</p>
                </div>
                <div className='news-card__description'>
                    <p className='news-card__description-text'>{newsDescription}</p>
                </div>
            </a>
            
        </>
    )
}

NewsCard.propTypes = {
    newsName: PropTypes.string.isRequired,
    newsUrl: PropTypes.string.isRequired,
    newsDescription: PropTypes.string.isRequired,
    publishedDate: PropTypes.string.isRequired,
}
  
export default NewsCard;