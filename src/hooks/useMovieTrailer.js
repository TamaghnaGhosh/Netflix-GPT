/* eslint-disable react-hooks/exhaustive-deps */

import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addTrailerVideo } from "../utils/Redux/moviesSlice";
import { axiosInstance } from "../utils/constant";

// import { useDispatch, useSelector } from "react-redux";

const useMovieTrailer = (movieId) => {
  const dispatch = useDispatch();
  // const trailerVideoInStore = useSelector(
  //   (store) => store?.movies?.trailerVideo
  // );
  // fetch trailer video & updating the store with trailer video data
  const getMovieVideo = async () => {
    try {
      const movieVideos = await axiosInstance.get(`https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`);
      const movieVideoData = movieVideos?.results;
      const filterData = movieVideoData?.filter((item) => item?.type === "Trailer");
      const trailer = filterData?.length > 0 ? filterData?.[0] : movieVideoData?.[0];
       dispatch(addTrailerVideo(trailer));
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    getMovieVideo();
  }, []);
};

export default useMovieTrailer;
