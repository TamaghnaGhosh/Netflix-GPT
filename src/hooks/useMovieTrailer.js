/* eslint-disable react-hooks/exhaustive-deps */

import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addTrailerVideo } from "../utils/Redux/moviesSlice";
import { API_OPTIONS } from "../utils/constant";
import axios from "axios";

// import { useDispatch, useSelector } from "react-redux";

const useMovieTrailer = (movieId) => {
  const dispatch = useDispatch();
  // const trailerVideoInStore = useSelector(
  //   (store) => store?.movies?.trailerVideo
  // );
  // fetch trailer video & updating the store with trailer video data
  const getMovieVideo = async () => {
    const movieVideos = await axios.get(`https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`, API_OPTIONS);
    const movieVideoData = movieVideos?.data?.results;
    const filterData = movieVideoData?.filter((item) => item?.type === "Trailer");
    const trailer = filterData?.length > 0 ? filterData?.[0] : movieVideoData?.[0];
    dispatch(addTrailerVideo(trailer));
  };
  useEffect(() => {
    getMovieVideo();
  }, []);
};

export default useMovieTrailer;
