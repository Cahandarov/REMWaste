import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  selectedSkipIndex: null,
};

const selectSlice = createSlice({
  name: "selectedSkip",
  initialState,
  reducers: {
    setSkip(state, action) {
      state.selectedSkipIndex = action.payload;
    },
  },
});
export const { setSkip } = selectSlice.actions;
export default selectSlice.reducer;
