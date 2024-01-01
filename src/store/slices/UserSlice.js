import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    user: null,
  },
  reducers: {
    addUser: (_, action) => {
      return { user: action.payload };
    },
    removeUser: () => {
      return { user: null };
    },
  },
});

export default userSlice.reducer;

export const { addUser, removeUser } = userSlice.actions;
