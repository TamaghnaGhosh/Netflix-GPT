/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTopRatedMovies } from "../utils/Redux/moviesSlice";
import { API_OPTIONS } from "../utils/constant";
import axios from "axios";

const useTopRatedMovies = () => {
  const dispatch = useDispatch();
  const User = useSelector((store) => store.user);
  const topRatedMoviesInStore = useSelector((store) => store?.movies?.topRatedMovies);
  const getTopRatedMovies = async () => {
    const response = await axios.get("https://api.themoviedb.org/3/movie/top_rated?page=1",API_OPTIONS);
    dispatch(addTopRatedMovies(response?.data?.results));
  };
  useEffect(() => {
    User && !topRatedMoviesInStore && getTopRatedMovies();
  }, [User]);
};

export default useTopRatedMovies;
