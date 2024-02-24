/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addNowPlayingMovies } from "../utils/Redux/moviesSlice";
import { axiosInstance } from "../utils/constant";

const useNowPlayingMovies = () => {
  const dispatch = useDispatch();
  const User = useSelector((store) => store.user);
  const nowPlayingMoviesInStore = useSelector((store) => store?.movies?.nowPlayingMovies);
  const getNowPlayingMovies = async () => {
    try {
      const response = await axiosInstance.get("https://api.themoviedb.org/3/movie/now_playing?page=1");
      dispatch(addNowPlayingMovies(response?.results));
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    User && !nowPlayingMoviesInStore && getNowPlayingMovies();
  }, [User]);
};

export default useNowPlayingMovies;
