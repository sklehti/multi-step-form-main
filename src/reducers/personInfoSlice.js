import { createSlice } from "@reduxjs/toolkit";

export const personInfoSlice = createSlice({
  name: "personinfo",
  initialState: {
    value: {
      name: "",
      email: "",
      phone: "",
      subcription: {
        plan: "Arcade",
        price: "$8/mo",
      },
    },
  },
  reducers: {
    personName: (state, action) => {
      state.value.name = action.payload;
    },
    personEmail: (state, action) => {
      state.value.email = action.payload;
    },
    personPhone: (state, action) => {
      state.value.phone = action.payload;
    },
    personSubcription: (state, action) => {
      state.value.subcription = action.payload;
    },

    personInfo: (state, action) => {
      state.value = state;
    },
  },
});

export const {
  personName,
  personEmail,
  personPhone,
  personInfo,
  personSubcription,
} = personInfoSlice.actions;

export default personInfoSlice.reducer;
