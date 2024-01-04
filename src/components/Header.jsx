import { signOut } from "@firebase/auth";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { auth } from "../utils/firebase";
import { toggleGptModal } from "../store/slices/gptSlice";

const Header = () => {
  const user = useSelector((state) => state.user.user);

  const dispatch = useDispatch();

  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        // navigate("/");
      })
      .catch((error) => {
        // An error happened.
        console.log(error);
      });
  };

  const handleGptClick = () => {
    dispatch(toggleGptModal());
  };

  return (
    <div className="px-10 py-2 w-full bg-gradient-to-b from-black flex justify-between items-center z-10">
      <div className="h-auto w-[120px]">
        <img
          src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
          className="object-cover"
          alt="netflix"
        />
      </div>
      {/* {user && <button>Logout</button>} */}
      {user && (
        <div className="flex gap-4">
          <button onClick={handleGptClick} className="py-2 px-3 bg-purple-600 text-white rounded-lg">
            Gpt Search
          </button>
          <div className="h-[40px] wi-[40px]">
            <img
              className="object-cover h-full w-auto"
              src="https://occ-0-3252-3663.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABfc2NGa6lIcAJVA6TOdGwQ921W3_2jicZyTZfp6rgNO3xGdvDHy1o1FYXVEz3YqxnIcX71bT6gPtBf3nhpZ3XyDcITrHPTI5jJ3J.png?r=145"
              alt="avatar"
            />
          </div>
          <p onClick={handleLogout} className="text-white cursor-pointer p-2 hover:underline">
            {user.displayName} (Logout)
          </p>
        </div>
      )}
    </div>
  );
};

export default Header;
