import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentIndex: 2,
};

const routerSlice = createSlice({
  name: "page",
  initialState,
  reducers: {
    setPage(state, action) {
      state.currentIndex = action.payload;
    },
  },
});
export const { setPage } = routerSlice.actions;
export default routerSlice.reducer;
