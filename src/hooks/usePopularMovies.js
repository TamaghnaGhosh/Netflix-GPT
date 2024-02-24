/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addPopularMovies } from "../utils/Redux/moviesSlice";
import { axiosInstance } from "../utils/constant";

const usePopularMovies = () => {
  const dispatch = useDispatch();
  const User = useSelector((store) => store.user);
  const popularMoviesInStore = useSelector((store) => store?.movies?.popularMovies);
  const getPopularMovies = async () => {
    try {
      const response = await axiosInstance.get("https://api.themoviedb.org/3/movie/popular?page=1");
      dispatch(addPopularMovies(response?.results));
    } catch (error) {
      console.error(error)
    }
  };
  useEffect(() => {
    User && !popularMoviesInStore && getPopularMovies();
  }, [User]);
};

export default usePopularMovies;
