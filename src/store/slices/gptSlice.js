import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name: "gpt",
  initialState: {
    modalVisible: false,
  },
  reducers: {
    toggleGptModal: (state) => {
      state.modalVisible = !state.modalVisible;
    },
  },
});

export const { toggleGptModal } = gptSlice.actions;

export default gptSlice.reducer;
