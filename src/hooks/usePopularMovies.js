/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addPopularMovies } from "../utils/Redux/moviesSlice";
import { API_OPTIONS } from "../utils/constant";
import axios from "axios";

const usePopularMovies = () => {
  const dispatch = useDispatch();
  const User = useSelector((store) => store.user);
  const popularMoviesInStore = useSelector((store) => store?.movies?.popularMovies);
  const getPopularMovies = async () => {
    const response = await axios.get("https://api.themoviedb.org/3/movie/popular?page=1",API_OPTIONS);
    dispatch(addPopularMovies(response?.data?.results));
  };
  useEffect(() => {
    User && !popularMoviesInStore && getPopularMovies();
  }, [User]);
};

export default usePopularMovies;
