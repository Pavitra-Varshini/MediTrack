import { createSlice } from "@reduxjs/toolkit";

const medicinesSlice = createSlice({
  name: "medicines",
  initialState: [],
  reducers: {
    addMedicine: (state, action) => {
      state.push(action.payload);
    },
    removeMedicine: (state, action) => {
      state.splice(action.payload, 1);
    },
    clearMedicines: () => [],
  },
});

export const { addMedicine, removeMedicine, clearMedicines } =
  medicinesSlice.actions;
export default medicinesSlice.reducer;
