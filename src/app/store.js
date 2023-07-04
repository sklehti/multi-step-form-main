import { configureStore } from "@reduxjs/toolkit";
import personInfoReducer from "../reducers/personInfoSlice";
import pageNumberReducer from "../reducers/pageNumberSlice";
import subcriptionPlanReducer from "../reducers/subcriptionPlanSlice";

export default configureStore({
  reducer: {
    personinfo: personInfoReducer,
    pagenumber: pageNumberReducer,
    subcriptionplan: subcriptionPlanReducer,
  },
});
