import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="px-10 pt-[25%] text-white w-2/4 absolute" style={{ height: "calc(100vh - 200px)" }}>
      <h1 className="text-6xl font-bold">{title}</h1>
      <p className="py-6 text-lg">{overview}</p>
      <div className="flex gap-2">
        <button className="bg-white text-black px-10 py-4 rounded-md">▶ Play</button>
        <button className="bg-gray-500/80 text-white px-10 py-4 rounded-md">More info</button>
      </div>
    </div>
  );
};

export default VideoTitle;
