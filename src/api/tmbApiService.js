import { toast } from 'react-toastify';
const KEY_API = '0b11624b950ea9c4284f61844023b09c';
const BASE_URL = 'https://api.themoviedb.org/3/';

export const fetchTrends = async (pageNum = 1) => {
  try {
    const response = await fetch(`${BASE_URL}trending/all/day?api_key=${KEY_API}&page=${pageNum}`);
    const data = await response.json();
    return data;

  } catch (error) {
    console.log(error);
  }
}

export const fetchMovies = async (movieSearch = '', pageNum = 1, isInitialRender = false) => {

  try {
    const response = await fetch(`${BASE_URL}search/movie?api_key=${KEY_API}&query=${movieSearch}&language=en-US&page=${pageNum}&include_adult=false`)
    const data = await response.json();
    
    if (!isInitialRender && data.results.length === 0) {
      toast.warn('Nothing was found on your request');
    }
    
    return data;

  } catch (error) {
    console.log(error);
  }
}

  export const fetchMovieById = async (movie) => {

    try {
      const response = await fetch(`${BASE_URL}movie/${movie}?api_key=${KEY_API}&language=en-US`)
      const data = await response.json();
      return data;
  
    } catch (error) {
      console.log(error);
    }
  }

  export const fetchMovieReviews = async (movie) => {

    try {
      const response = await fetch(`${BASE_URL}movie/${movie}/reviews?api_key=${KEY_API}&language=en-US&page=1`)
      const data = await response.json();
      return data.results;
  
    } catch (error) {
      console.log(error);
    }
  }

  export const fetchMovieCast = async (movie) => {

    try {
      const response = await fetch(`${BASE_URL}movie/${movie}/credits?api_key=${KEY_API}&language=en-US&page=1`)
      const data = await response.json();
      return data.cast;
  
    } catch (error) {
      console.log(error);
    }
  }

  export const fetchGenres = async () => {

    try {
      const response = await fetch(`${BASE_URL}genre/movie/list?api_key=${KEY_API}&language=en-US`)
      const data = await response.json();

      const genresList = data.genres.reduce((acc, { id, name }) => {
        acc[id] = name;
        return acc;
        }, {});

        localStorage.setItem('genresList', JSON.stringify(genresList));
  
    } catch (error) {
      console.log(error);
    }
  }