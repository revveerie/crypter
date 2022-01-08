export function getOptionsCoins (limit) {
  return {
    method: 'GET',
    url: 'https://coinranking1.p.rapidapi.com/coins',
    params: {
        limit: limit,
        timePeriod: '24h',
        offset: '0'
    },
    headers: {
      'x-rapidapi-host': 'coinranking1.p.rapidapi.com',
      'x-rapidapi-key': '3327c598bbmsh9ee4085f61aad91p18cb75jsncdaeac2a2d8f'
    }
  }
}

export function getOptionsNews (limit, query) {
  return {
    method: 'GET',
    url: 'https://bing-news-search1.p.rapidapi.com/news/search',
    params: {
        q: query,
        safeSearch: 'Moderate',
        textFormat: 'Raw',
        freshness: 'Week',
        sortBy: 'Date',
        setLang: 'EN',
        count: `${limit}`
    },
    headers: {
        'accept-language': 'en',
        'x-bingapis-sdk': 'true',
        'x-rapidapi-host': 'bing-news-search1.p.rapidapi.com',
        'x-rapidapi-key': '1b92fc6189mshf13b73eb71a746ap1ac9eajsn89eeeed1eb8f'
    }
  }
}

export const optionsExchanges = {
      method: 'GET',
      url: 'https://coinranking1.p.rapidapi.com/exchanges',
      params: {
        limit: '100'
    },
      headers: {
          'x-rapidapi-host': 'coinranking1.p.rapidapi.com',
          'x-rapidapi-key': '7d7142ee90msh51e0c53239d7405p1f81d5jsn078463297446'
      }
}

export function getOptionsCoin(uuid)  {
  return {
      method: 'GET',
      url: `https://coinranking1.p.rapidapi.com/coin/${uuid}`,
      headers: {
          'x-rapidapi-host': 'coinranking1.p.rapidapi.com',
          'x-rapidapi-key': '3327c598bbmsh9ee4085f61aad91p18cb75jsncdaeac2a2d8f'
      }
  }
}

export function getOptionsHistory(uuid, period)  {
  return {
      method: 'GET',
      url: `https://coinranking1.p.rapidapi.com/coin/${uuid}/history`,
      params: {timePeriod: `${period}`},
      headers: {
          'x-rapidapi-host': 'coinranking1.p.rapidapi.com',
          'x-rapidapi-key': '3327c598bbmsh9ee4085f61aad91p18cb75jsncdaeac2a2d8f'
      }
  }
}