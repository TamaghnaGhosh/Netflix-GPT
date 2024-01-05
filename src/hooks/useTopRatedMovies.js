/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTopRatedMovies } from "../utils/Redux/moviesSlice";
import { API_OPTIONS } from "../utils/constant";

const useTopRatedMovies = () => {
  const dispatch = useDispatch();
  const topRatedMoviesInStore = useSelector(
    (store) => store?.movies?.topRatedMovies
  );
  const getTopRatedMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/top_rated?page=1",
      API_OPTIONS
    );
    const json = await data.json();
    dispatch(addTopRatedMovies(json?.results));
  };
  useEffect(() => {
    !topRatedMoviesInStore && getTopRatedMovies();
  }, []);
};

export default useTopRatedMovies;
