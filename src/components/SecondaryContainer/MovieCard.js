import React from "react";
import { TMDB_IMG_URL } from "../../utils/constant";

const MovieCard = ({ posterPath, title }) => {
  if (!posterPath) return null;
  return (
    <div className="w-36 md:w-40 pr-3 hover:w-52 hover:rounded-lg ">
      <img alt={title} className="rounded-lg" src={TMDB_IMG_URL + posterPath} />
      <h1 className="text-sm text-white font-semibold hover:text-lg">{title}</h1>
    </div>
  );
};

export default MovieCard;
