import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./slices/UserSlice";
import movieReducer from "./slices/movieSlice";

const store = configureStore({
  reducer: {
    user: userReducer,
    movie: movieReducer,
  },
});

export default store;
