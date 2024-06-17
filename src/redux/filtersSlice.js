import { createSlice } from "@reduxjs/toolkit";

// const filtersInitialState = {
// filters: {
//   name: "";
// }
// }

const filtersSlice = createSlice({
  name: "filters/name",
  initialState: {
    filters: {
      name: "",
    },
  },
  reducers: {
    changeFilter(state, action) {
      state.status = action.payload;
    },
  },
});

export const { changeFilter } = filtersSlice.actions;
export const filtersReducer = filtersSlice.reducer;
