import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="px-10 pt-[25%] text-white w-full md:w-2/4 absolute" style={{ height: "calc(100vh - 200px)" }}>
      <h1 className="text-2xl md:text-3xl lg-6xl font-bold">{title}</h1>
      <p className="hidden lg:block py-6 md:text-md lg:text-lg">{overview}</p>
      <div className="flex gap-2 my-2">
        <button className="bg-white text-black rounded-md px-6 py-4 md:px-10 md:py-4">▶ Play</button>
        <button className="bg-gray-500/80 text-white rounded-md px-6 py-4 md:px-10 md:py-4">More info</button>
      </div>
    </div>
  );
};

export default VideoTitle;
