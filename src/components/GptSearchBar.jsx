import React from "react";

const GptSearchBar = () => {
  return (
    <div className="w-full flex justify-center items-center gap-5">
      <input
        type="text"
        className="py-2 px-4 m-4 w-[450px] bg-white text-black"
        placeholder="What would you like to watch?"
      />
      <button className="py-2 px-4 bg-red-700 text-white rounded-lg h-max">Search</button>
    </div>
  );
};

export default GptSearchBar;
