/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addUpcomingMovies } from "../utils/Redux/moviesSlice";
import { axiosInstance } from "../utils/constant";

const useUpcomingMovies = () => {
  const dispatch = useDispatch();
  const User = useSelector((store) => store.user);
  const upcomingMoviesInStore = useSelector((store) => store?.movies?.upcomingMovies);
  const getUpcomingMovies = async () => {
    try {
      const response = await axiosInstance.get("https://api.themoviedb.org/3/movie/upcoming?page=1");
      dispatch(addUpcomingMovies(response?.results));
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    User && !upcomingMoviesInStore && getUpcomingMovies();
  }, [User]);
};

export default useUpcomingMovies;
