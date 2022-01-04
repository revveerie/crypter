import React from 'react';
import { useState, useEffect } from "react";
import axios from "axios";

import NewsCard from '../NewsCard/NewsCard.jsx';

const NewsApp = () => {
    const [newsList, setNewsList] = useState([]);

    useEffect(() => {

        const optionsNews = {
            method: 'GET',
            url: 'https://bing-news-search1.p.rapidapi.com/news/search',
            params: {
                q: 'Cryptocurrencies',
                safeSearch: 'Moderate',
                textFormat: 'Raw',
                freshness: 'Week',
                count: '30',
                sortBy: 'Date',
            },
            headers: {
                'accept-language': 'en',
                'x-bingapis-sdk': 'true',
                'x-rapidapi-host': 'bing-news-search1.p.rapidapi.com',
                'x-rapidapi-key': 'dbd484c3camshda218e5f7671c8dp17ca79jsn03298ac7b16b'
            }
          };

        axios.request(optionsNews).then(function (response) {
            setNewsList(response.data.value);
        }).catch(function (error) {
                console.error(error);
        });
    }, []);

    return (
        <>
            <div className='news'>
                <div className="news-card__wrapper">
                    {
                        newsList.map((news, index) => {
                            return (
                                <div key={index} className='news-card'>
                                    <NewsCard 
                                        newsName={news.name}
                                        newsUrl={news.url}
                                        newsDescription={news.description}
                                        providerName={news.provider[0].name}
                                        publishedDate={news.datePublished.substring(0, 10)+' '+news.datePublished.substring(11, 16)}      
                                    />
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </>
    );
};

export default NewsApp;