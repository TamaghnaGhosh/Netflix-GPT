/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addNowPlayingMovies } from "../utils/Redux/moviesSlice";
import { API_OPTIONS } from "../utils/constant";
import axios from "axios";

const useNowPlayingMovies = () => {
  const dispatch = useDispatch();
  const User = useSelector((store) => store.user);
  const nowPlayingMoviesInStore = useSelector((store) => store?.movies?.nowPlayingMovies);
  const getNowPlayingMovies = async () => {
    const response = await axios.get("https://api.themoviedb.org/3/movie/now_playing?page=1",API_OPTIONS);
    dispatch(addNowPlayingMovies(response.data.results));
  };
  useEffect(() => {
    User && !nowPlayingMoviesInStore && getNowPlayingMovies();
  }, [User]);
};

export default useNowPlayingMovies;
