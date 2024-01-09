import React from "react";
import GptSearchBar from "./GptSearchBar";
import GptMovieSuggestions from "./GptMovieSuggestions";

const GptSearch = () => {
  return (
    <div className="w-full">
      <div className="absolute w-full" style={{ height: "calc(100vh - 80px)" }}>
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/c31c3123-3df7-4359-8b8c-475bd2d9925d/15feb590-3d73-45e9-9e4a-2eb334c83921/IN-en-20231225-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="netflix-banner"
          className="object-cover h-full w-full absolute"
        />
      </div>
      <div className="absolute w-full h-full overflow-scroll p-4" style={{ height: "calc(100vh - 80px)" }}>
        <GptSearchBar />
        <GptMovieSuggestions />
      </div>
    </div>
  );
};

export default GptSearch;
