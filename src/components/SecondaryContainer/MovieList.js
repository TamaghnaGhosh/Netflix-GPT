import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  // console.log(movies);
  return (
    <div className="px-6">
      <h1 className="text-lg md:text-3xl py-4 text-white">{title}</h1>
      <div className="flex overflow-x-auto transition-all">
        <div className="flex">
          {movies?.map((movie) => (
            <MovieCard
              key={movie?.id}
              posterPath={movie?.poster_path}
              title={movie?.original_title}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
