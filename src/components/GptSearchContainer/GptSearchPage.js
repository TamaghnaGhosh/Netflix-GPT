import React from "react";
import GptSearchBar from "./GptSearchBar";
import GptMovieSuggetions from "./GptMovieSuggetions";

const GptSearch = () => {
  return (
    <div>
      <GptSearchBar />
      <GptMovieSuggetions/>
    </div>
  );
};

export default GptSearch;
