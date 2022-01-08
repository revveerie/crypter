import React from 'react';
import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from 'react-router-dom';

import { getOptionsNews } from '../../helpers/axiosOptions.js';
import NewsCard from '../NewsCard/NewsCard.jsx';

const NewsApp = () => {
    const { search } = useParams();
    const [newsList, setNewsList] = useState([]);
    const [searchNewsRequest, setSearchNewsRequest] = useState(search || 'Cryptocurrencies');
    const [searchCoin, setSearchCoin] = useState('');
    let cleanupFunction = false;

    function itemClickHandler(){
        let value = document.querySelector('#search-input').value;
        setSearchNewsRequest(value);
    }

    const optionsNews = getOptionsNews(30, searchNewsRequest);

    useEffect(()=>{
        setSearchNewsRequest(search || 'Cryptocurrencies');
    }, [search])

    useEffect(() => {
        axios.request(optionsNews).then(function (response) {
            if(!cleanupFunction) setNewsList(response.data.value);
        }).catch(function (error) {
            console.error(error);
        });
        return () => cleanupFunction = true;   
    }, [searchNewsRequest]);

    return (
        <>
            <div className='news'>
                    <div className="news__input">
                        <input
                            id='search-input'
                            type='text'
                            placeholder='Coin news'
                            value={searchCoin}
                            onChange={(event) => setSearchCoin(event.target.value)}
                        />
                        <button onClick={itemClickHandler} id="search-button">Search</button>
                    </div>
                <div className="news-card__wrapper">
                    { newsList.length !== 0 ?
                        newsList.map((news, index) => {
                            return (
                                <div key={index} className='news-card'>
                                    <NewsCard 
                                        newsName={news.name}
                                        newsUrl={news.url}
                                        newsDescription={news.description}
                                        publishedDate={news.datePublished.substring(0, 10)+' '+news.datePublished.substring(11, 16)}      
                                    />
                                </div>
                            )
                    })
                    : 
                    <div className="news__error">
                        <p className='news__error-msg'>
                            There is no news about this coin
                        </p>
                    </div>
                    }
                </div>
            </div>
        </>
    );
};

export default NewsApp;