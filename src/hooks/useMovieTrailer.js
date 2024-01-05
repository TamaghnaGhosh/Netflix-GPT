/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTrailerVideo } from "../utils/Redux/moviesSlice";
import { API_OPTIONS } from "../utils/constant";

const useMovieTrailer = (movieId) => {
  const dispatch = useDispatch();
  const trailerVideoInStore = useSelector(
    (store) => store?.movies?.trailerVideo
  );
  // fetch trailer video & updating the store with trailer video data
  const getMovieVideo = async () => {
    const movieVideos = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`,
      API_OPTIONS
    );
    const movieVideoJsonData = await movieVideos.json();
    const filterData = movieVideoJsonData?.results?.filter(
      (item) => item?.type === "Trailer"
    );
    const trailer =
      filterData?.length > 0 ? filterData[0] : movieVideoJsonData?.results[0];
    dispatch(addTrailerVideo(trailer));
  };
  useEffect(() => {
    !trailerVideoInStore && getMovieVideo();
  }, []);
};

export default useMovieTrailer;
