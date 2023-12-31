import React from "react";
import { TMDB_IMG_URL } from "../../utils/constant";

const MovieCard = ({ posterPath, title }) => {
  return (
    <div className="w-64 pr-3">
      <img alt="Movie card" className="rounded-md h-40" src={TMDB_IMG_URL + posterPath}/>
      <h1 className="text-lg text-white">{title}</h1>
    </div>
  );
};

export default MovieCard;
