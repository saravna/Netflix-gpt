import React, { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [formType, setFormType] = useState("SIGNIN");

  const toggleFormType = () => {
    setFormType((p) => (p === "SIGNIN" ? "SIGNUP" : "SIGNIN"));
  };

  return (
    <div className="h-full">
      <img
        src="https://assets.nflxext.com/ffe/siteui/vlv3/c31c3123-3df7-4359-8b8c-475bd2d9925d/15feb590-3d73-45e9-9e4a-2eb334c83921/IN-en-20231225-popsignuptwoweeks-perspective_alpha_website_large.jpg"
        alt="netflix-banner"
        className="object-cover h-full w-full"
      />
      <form className="absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] text-white w-4/12 bg-black px-12 py-16 bg-opacity-80 rounded-md">
        <h3 className="text-3xl font-bold my-4">{formType === "SIGNIN" ? "Login" : "Signup"}</h3>
        <input
          name="email"
          type="email"
          placeholder="Enter email"
          className="p-4 my-4 border border-black block w-full bg-gray-600"
        />
        {formType === "SIGNUP" && (
          <input
            name="name"
            type="text"
            placeholder="Enter Name"
            className="p-4 my-4 border border-black block w-full bg-gray-600"
          />
        )}
        <input
          name="password"
          type="password"
          placeholder="Enter password"
          className="p-4 my-4 border border-black block w-full bg-gray-600"
        />
        <button className="w-full bg-red-700 p-3 rounded-md my-2">Sign in</button>
        <p onClick={toggleFormType} className="py-2 my-2 cursor-pointer">
          {formType === "SIGNIN" ? "New to netflix?  Signup now" : "Already have account?  Signin"}
        </p>
      </form>
    </div>
  );
};

export default Login;
