import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name: "gpt",
  initialState: {
    modalVisible: false,
    searchResults: [],
  },
  reducers: {
    toggleGptModal: (state) => {
      state.modalVisible = !state.modalVisible;
    },
    updateSearchResults: (state, action) => {
      state.searchResults = action.payload;
    },
  },
});

export const { toggleGptModal, updateSearchResults } = gptSlice.actions;

export default gptSlice.reducer;
