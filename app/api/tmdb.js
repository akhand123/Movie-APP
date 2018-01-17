
import { API_KEY } from '../constants/api';

const BASE_URL = 'https://api.themoviedb.org/3';
const TMDB_URL = 'https://www.themoviedb.org';

const fetchData = (params, page) =>
  fetch(`${BASE_URL}/${params}?api_key=${API_KEY}&language=en-US${page ? '&page='+ (page || '1') : ''}`)
  .then(res => res.json());

const fetchDetailData = (params, extra) => {
  return fetch(`${BASE_URL}/${params}?api_key=${API_KEY}&language=en-US${extra ? '&append_to_response='+extra : ''}`)
  .then(res => res.json());
}

const fetchSearch = (params, query, page) => {
  return fetch(`${BASE_URL}/${params}?api_key=${API_KEY}&language=en-US&query=${query}${page ? '&page='+ (page || '1') : ''}`)
  .then(res => res.json());
}

export const fetchMoviePopular = async (page) => {
  try {
    return await fetchData('movie/popular', page ? page : null);
  } catch (err) {
    console.log(err);
  }
};

export const fetchMovieDetail = async movieId => {
  try {
    return await fetchDetailData(`movie/${movieId}`, 'videos,credits');
  } catch (err) {
    console.log(err);
  }
};

export const searchMovie = async (query, page) => {
  try {
    return await fetchSearch('search/movie', query, page);
  } catch (err) {
    console.log(err);
  }
};

export const searchAnything = async (query, page) => {
  try {
    return await fetchSearch('search/multi', query, page);
  } catch (err) {
    console.log(err);
  }
};

export const searchSuggestions = async (query) => {
  return fetch(`${TMDB_URL}/search/multi?language=en-US&query=${query}`)
  .then(res => res.json());
};

export const fetchMoviesSimilar = async movieId => {
  try {
    return await fetchData(`movie/${movieId}/similar`);
  } catch (err) {
    console.log(err);
  }
};

export const fetchMovieTrailers = async movieId => {
  try {
    return await fetchData(`movie/${movieId}/videos`);
  } catch (err) {
    console.log(err);
  }
};