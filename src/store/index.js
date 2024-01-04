import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./slices/UserSlice";
import movieReducer from "./slices/movieSlice";
import gptReducer from "./slices/gptSlice";

const store = configureStore({
  reducer: {
    user: userReducer,
    movie: movieReducer,
    gpt: gptReducer,
  },
});

export default store;
