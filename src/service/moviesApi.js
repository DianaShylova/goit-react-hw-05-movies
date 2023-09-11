import axios from "axios";
//API Key: f404d8da11cbab86424013df50425b60;


const instance = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  params: {
    api_key: 'f404d8da11cbab86424013df50425b60',
  },
});

export const getTrendingMovies = async () => {
  const { data } = await instance.get('/trending/movie/day');
  return data.results;
};

export const getSearchMovie = async (query) => {
  const { data } = await instance.get(`/search/movie?query=${query}`);
  return data.results;
};

export const getMovieDetails = async movieId => {
  const { data } = await instance.get(`/movie/${movieId}`);
  return data;
};

export const getCast = async movieId => {
  const { data } = await instance.get(`/movie/${movieId}/credits`);
  return data.cast;
};

export const getReviews = async movieId => {
  const { data } = await instance.get(`/movie/${movieId}/reviews`);
  return data.results;
};