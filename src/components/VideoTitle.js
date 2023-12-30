import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-screen aspect-video pt-[20%] px-12 absolute text-white bg-gradient-to-r from-black">
      <h1 className="text-6xl font-semibold">{title}</h1>
      <p className="py-6 text-lg w-1/4">{overview}</p>
      <div className="">
        <button className=" bg-white hover:bg-opacity-50 hover:text-white text-black py-4 px-12 text-xl rounded-lg">
          Watch
        </button>
        <button className="mx-2 bg-gray-500 hover:bg-gray-500 text-white py-4 px-12 text-xl bg-opacity-50 rounded-lg">
          More info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
