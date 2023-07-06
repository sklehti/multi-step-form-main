import { createSlice } from "@reduxjs/toolkit";

export const pageNumberSlice = createSlice({
  name: "pagenumber",
  initialState: {
    value: 1,
  },
  reducers: {
    increment: (state) => {
      if (state.value < 5) state.value += 1;
    },
    decrement: (state) => {
      if (state.value > 1) state.value -= 1;
    },
  },
});

export const { increment, decrement } = pageNumberSlice.actions;

export default pageNumberSlice.reducer;
