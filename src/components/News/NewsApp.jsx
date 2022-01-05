import React from 'react';
import { useState, useEffect } from "react";
import axios from "axios";

import { optionsNews } from '../../helpers/axiosOptions.js';
import NewsCard from '../NewsCard/NewsCard.jsx';

const NewsApp = () => {
    const [newsList, setNewsList] = useState([]);
    let cleanupFunction = false;

    optionsNews.params.count = '30';

    useEffect(() => {
        axios.request(optionsNews).then(function (response) {
            if(!cleanupFunction) setNewsList(response.data.value);
        }).catch(function (error) {
            console.error(error);
        });
        return () => cleanupFunction = true;
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