import { createSlice } from "@reduxjs/toolkit";

export const subcriptionPlanSlice = createSlice({
  name: "subcriptionplan",
  initialState: {
    value: {
      subcription: [
        { plan: "Arcade", price: "$9/mo" },
        { plan: "Advanced", price: "$12/mo" },
        { plan: "Pro", price: "$15/mo" },
      ],
      addOnsPrice: [
        { price: "+$1/mo" },
        { price: "+$2/mo" },
        { price: "+$2/mo" },
      ],
      period: "monthly",
    },
  },
  reducers: {
    monthly: (state) => {
      state.value = {
        subcription: [
          { plan: "Arcade", price: "$9/mo" },
          { plan: "Advanced", price: "$12/mo" },
          { plan: "Pro", price: "$15/mo" },
        ],
        addOnsPrice: [
          { price: "+$1/mo" },
          { price: "+$2/mo" },
          { price: "+$2/mo" },
        ],
        period: "monthly",
      };
    },
    yearly: (state) => {
      state.value = {
        subcription: [
          { plan: "Arcade", price: "$90/yr" },
          { plan: "Advanced", price: "$120/yr" },
          { plan: "Pro", price: "$150/yr" },
        ],
        addOnsPrice: [
          { price: "+$10/yr" },
          { price: "+$20/yr" },
          { price: "+$20/yr" },
        ],
        period: "yearly",
      };
    },
  },
});

export const { monthly, yearly } = subcriptionPlanSlice.actions;

export default subcriptionPlanSlice.reducer;
