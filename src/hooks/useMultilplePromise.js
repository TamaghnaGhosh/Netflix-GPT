import { API_OPTIONS } from "../utils/constant";

export const fetchMovieFromTMDB = async (movies) => {
  const fetchMovieData = await fetch(
    `https://api.themoviedb.org/3/search/movie?query=${movies}&include_adult=false&language=en-US&page=1`,
    API_OPTIONS
  );
  const json = await fetchMovieData?.json();
  return json?.results;
};
