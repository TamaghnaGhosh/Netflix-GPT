import React from "react";
import { TMDB_IMG_URL } from "../../utils/constant";

const MovieCard = ({ posterPath, title }) => {
  if (!posterPath) return null;
  return (
    <div className="w-36 md:w-48 pr-3 cursor-pointer">
      <img alt={title} className="rounded-lg" src={TMDB_IMG_URL + posterPath} />
      <h1 className="text-lg text-white font-bold">{title}</h1>
    </div>
  );
};

export default MovieCard;
