/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addNowPlayingMovies } from "../utils/Redux/moviesSlice";
import { API_OPTIONS } from "../utils/constant";

const useNowPlayingMovies = () => {
  const dispatch = useDispatch();
  const nowPlayingMoviesInStore = useSelector(
    (store) => store?.movies?.nowPlayingMovies
  );
  const getNowPlayingMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing?page=1",
      API_OPTIONS
    );
    const json = await data.json();
    dispatch(addNowPlayingMovies(json?.results));
  };
  useEffect(() => {
    !nowPlayingMoviesInStore && getNowPlayingMovies();
  }, []);
};

export default useNowPlayingMovies;
