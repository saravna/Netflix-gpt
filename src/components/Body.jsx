import React, { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import Header from "./Header";
import { onAuthStateChanged } from "@firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../store/slices/UserSlice";

const Body = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, accessToken, displayName } = user;
        console.log({ user });
        dispatch(addUser({ uid, email, accessToken, displayName }));
      } else {
        dispatch(removeUser());
      }
    });
  }, []);

  return (
    <div className="bg-black h-[100vh]">
      <Header />
      <Outlet />
    </div>
  );
};

export default Body;
