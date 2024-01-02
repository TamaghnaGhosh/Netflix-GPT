import React from "react";
import GptSearchBar from "./GptSearchBar";
import GptMovieSuggetions from "./GptMovieSuggetions";
import { BG_IMG } from "../../utils/constant";

const GptSearch = () => {
  return (
    <div>
    <div className="absolute -z-10">
        <img
          className="concord-img vlv-creative"
          src={BG_IMG}
          alt="bg-img"
        />
      </div>
      <GptSearchBar />
      <GptMovieSuggetions/>
    </div>
  );
};

export default GptSearch;
