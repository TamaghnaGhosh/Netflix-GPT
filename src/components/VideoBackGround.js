/* eslint-disable react-hooks/exhaustive-deps */
import { useDispatch, useSelector } from "react-redux";
import useMovieTrailer from "../hooks/useMovieTrailer";
import { useEffect } from "react";
import { addTrailerVideo } from "../utils/Redux/moviesSlice";

const VideoBackground = ({ movieId, watch }) => {
  useMovieTrailer(movieId);
  const dispatch = useDispatch();
  const movieInfo = useSelector((store) => store?.movies?.trailerVideo);
  useEffect(() => {
    window.scrollTo(0, 0);
    window.scroll({
      behavior: "smooth",
    });
    return () => {
      dispatch(addTrailerVideo(null));
    };
  }, []);

  return (
    <div className={watch === "watch" ? "md:pl-[270px] md:pt-10" : "pl-0 pt-0"}>
      <iframe
        className={
          watch === "watch"
            ? "w-screen md:w-[85%] aspect-video rounded-lg"
            : "w-screen aspect-video"
        }
        src={
          "https://www.youtube.com/embed/" +
          movieInfo?.key +
          (watch === "watch" ? "?autoplay=1&mute=0" : "?autoplay=1&mute=1")
        }
        title="YouTube video player"
        // frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default VideoBackground;
