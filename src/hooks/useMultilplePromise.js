import axios from "axios";
import { API_OPTIONS } from "../utils/constant";

export const fetchMovieFromTMDB = async (movies) => {
  const fetchMovieData = await axios.get(`https://api.themoviedb.org/3/search/movie?query=${movies}&include_adult=false&language=en-US&page=1`,API_OPTIONS);
  const results = fetchMovieData?.data?.results;
  return results;
};
