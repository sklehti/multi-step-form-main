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
      addOns: [],
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
    addOns: (state, action) => {
      state.value.addOns.push(action.payload);
    },
    removeAddOns: (state, action) => {
      if (action.payload) {
        const newArray = action.payload.personinfo.addOns.filter((f) => {
          return f.addOnsName !== action.payload.addOnsName;
        });

        state.value.addOns = newArray;
      }
    },

    personInfo: (state, action) => {
      state.value = {
        name: state.value.name,
        email: state.value.email,
        phone: state.value.phone,
        subcription: {
          plan: "Arcade",
          price: "$8/mo",
        },
        addOns: [],
      };
    },
  },
});

export const {
  personName,
  personEmail,
  personPhone,
  personInfo,
  personSubcription,
  addOns,
  removeAddOns,
} = personInfoSlice.actions;

export default personInfoSlice.reducer;
