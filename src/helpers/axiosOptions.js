export const optionsCoins = {
    method: 'GET',
    url: 'https://coinranking1.p.rapidapi.com/coins',
    params: {
        timePeriod: '24h',
        offset: '0'
    },
    headers: {
      'x-rapidapi-host': 'coinranking1.p.rapidapi.com',
      'x-rapidapi-key': '3327c598bbmsh9ee4085f61aad91p18cb75jsncdaeac2a2d8f'
    }
};

export const optionsNews = {
    method: 'GET',
    url: 'https://bing-news-search1.p.rapidapi.com/news/search',
    params: {
        q: 'Cryptocurrencies',
        safeSearch: 'Moderate',
        textFormat: 'Raw',
        freshness: 'Week',
        sortBy: 'Date',
        setLang: 'EN'
    },
    headers: {
        'accept-language': 'en',
        'x-bingapis-sdk': 'true',
        'x-rapidapi-host': 'bing-news-search1.p.rapidapi.com',
        'x-rapidapi-key': 'dbd484c3camshda218e5f7671c8dp17ca79jsn03298ac7b16b'
    }
};

export const optionsExchange = {
    method: 'GET',
    url: 'https://coinranking1.p.rapidapi.com/exchange/-zdvbieRdZ/coins',
    params: {
      referenceCurrencyUuid: 'yhjMzLPhuIDl',
      limit: '100',
      offset: '0',
      orderBy: '24hVolume',
      orderDirection: 'desc'
    },
    headers: {
      'x-rapidapi-host': 'coinranking1.p.rapidapi.com',
      'x-rapidapi-key': '3327c598bbmsh9ee4085f61aad91p18cb75jsncdaeac2a2d8f'
    }
};