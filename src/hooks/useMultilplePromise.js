import { axiosInstance } from "../utils/constant";

export const fetchMovieFromTMDB = async (movies) => {
  try {
  const fetchMovieData = await axiosInstance.get(`https://api.themoviedb.org/3/search/movie?query=${movies}&include_adult=false&language=en-US&page=1`);
  const results = fetchMovieData?.results;
  return results;
  } catch (error) {
    console.error(error)
  }
};
