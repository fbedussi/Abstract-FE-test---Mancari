import { createReducer } from "@reduxjs/toolkit";
import * as action from "./actions";

const filterReducer = createReducer({ filter: "" }, (builder) => {
  builder
    .addCase(action.FILTER_UPDATE, (state, action) => {
      state.filter = action.payload;
    })
    .addCase(action.FILTER_RESET, (state, action) => {
      state.filter = "";
    });
});

export { filterReducer };
