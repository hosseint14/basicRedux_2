import { createSlice } from "@reduxjs/toolkit";

const initialCounterState = { counter: 0, showCounter: true };

const counterSlice = createSlice({
  name: "counter",
  initialState: initialCounterState,
  reducers: {
    INC(state, action) {
      state.counter += action.payload;
    },

    DEC(state, action) {
      state.counter -= action.payload;
    },

    reset(state) {
      state.counter = 0;
    },

    showCounter(state) {
      state.showCounter = !state.showCounter;
    },
  },
});

export const counterActions = counterSlice.actions;

export default counterSlice.reducer;
