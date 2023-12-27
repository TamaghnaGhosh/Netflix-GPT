import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="pt-36 px-12">
      <h1 className="text-3xl font-semibold">{title}</h1>
      <p className="py-6 text-lg w-1/4">{overview}</p>
      <div className="">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Watch
        </button>
        <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 p-2 m-2 rounded">
          More info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
