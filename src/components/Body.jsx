import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";

const Body = () => {
  return (
    <div className="bg-black h-[100vh]">
      <Header />
      <Outlet />
    </div>
  );
};

export default Body;
