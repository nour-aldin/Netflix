import React from 'react'
import Main from '../components/Main'
import Row from '../components/Row'
// import requests from '../Requests'

const requests = {
  requestPopular: `https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US&page=1`,
  requestTopRated: `https://api.themoviedb.org/3/movie/top_rated?api_key=${key}&language=en-US&page=1`,
  requestTrending: `https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US&page=2`,
  requestHorror: `https://api.themoviedb.org/3/search/movie?api_key=${key}&language=en-US&query=horror&page=1&include_adult=false`,
  requestUpcoming: `https://api.themoviedb.org/3/movie/upcoming?api_key=${key}&language=en-US&page=1`,
};


const HomePage = () => {
  return (
    <div className="">
      <Main />
      <Row rowId="1" title='Up Coming' fetchURL={requests.requestUpcoming} />
      <Row rowId="2" title='Popular' fetchURL={requests.requestPopular} />
      <Row rowId="3" title='Trending' fetchURL={requests.requestTrending} />
      <Row rowId="4" title='Top Rated' fetchURL={requests.requestTopRated} />
      <Row rowId="5" title='Horror' fetchURL={requests.requestHorror} />
    </div>
  )
}

export default HomePage