import React from "react";
import GptSearchBar from "./GptSearchBar";
import GptMovieSuggetions from "./GptMovieSuggetions";
import { BG_IMG } from "../../utils/constant";

const GptSearch = () => {
  return (
    <>
      <div className="fixed -z-10">
        <img className="h-screen object-cover md:h-auto" src={BG_IMG} alt="bg-img" />
      </div>
      <div className="">
        <GptSearchBar />
        <GptMovieSuggetions />
      </div>
    </>
  );
};

export default GptSearch;
