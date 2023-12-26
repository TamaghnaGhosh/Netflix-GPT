import React, { useEffect } from "react";
import Header from "./Header";
import { API_OPTIONS } from "../utils/constant";

const Browse = () => {
  useEffect(() => {
    getNowPlayingMovies();
  }, []);

  const getNowPlayingMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing?page=5",
      API_OPTIONS
    );
    const res = await data.json();
    console.log(res);
  };

  return (
    <div>
      <Header />
    </div>
  );
};

export default Browse;
