import { configureStore } from "@reduxjs/toolkit";

import counterSlice from "./counter-slice";
import authSlice from "./auth-slice";

const Store = configureStore({
  reducer: { counter: counterSlice, auth: authSlice },
});


export default Store;
