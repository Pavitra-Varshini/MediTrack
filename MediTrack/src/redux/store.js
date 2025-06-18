import { configureStore } from "@reduxjs/toolkit";
import medicinesReducer from "./medicinesSlice";

export default configureStore({
  reducer: {
    medicines: medicinesReducer,
  },
});
