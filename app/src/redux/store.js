import { configureStore } from "@reduxjs/toolkit";
import { filterReducer } from "./reducers";

const store = configureStore({
  reducer: {
    filter: filterReducer,
  },
});

export default store;
