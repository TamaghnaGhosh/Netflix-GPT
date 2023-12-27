import React from "react";
import { useSelector } from "react-redux";
import VideoTitle from "./VideoTitle";
import VideoBackGround from "./VideoBackGround";

const MainContainer = () => {
  const movies = useSelector((store) => store.movies?.nowPlayingMovies);
  if (!movies) return;

  const MainMovie = movies[0];
  console.log(MainMovie);

  const { original_title, overview } = movies[0];

  return (
    <div>
      <VideoTitle title={original_title} overview={overview} />
      <VideoBackGround />
    </div>
  );
};

export default MainContainer;
