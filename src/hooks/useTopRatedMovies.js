/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTopRatedMovies } from "../utils/Redux/moviesSlice";
import { axiosInstance } from "../utils/constant";

const useTopRatedMovies = () => {
  const dispatch = useDispatch();
  const User = useSelector((store) => store.user);
  const topRatedMoviesInStore = useSelector((store) => store?.movies?.topRatedMovies);
  const getTopRatedMovies = async () => {
    try {
      const response = await axiosInstance.get("https://api.themoviedb.org/3/movie/top_rated?page=1");
      dispatch(addTopRatedMovies(response?.results));
    } catch (error) {
      console.error(error)
    }
  };
  useEffect(() => {
    User && !topRatedMoviesInStore && getTopRatedMovies();
  }, [User]);
};

export default useTopRatedMovies;
