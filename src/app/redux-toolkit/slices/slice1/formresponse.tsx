import { ISliceResponseFormInitialstate } from "@/app/common/interfaces/container2form";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: ISliceResponseFormInitialstate = { boll: "", message: "" };

const FormResponseSlice = createSlice({
  name: "FormResponse",
  initialState,
  reducers: {
    UserInfo(state, action: PayloadAction<ISliceResponseFormInitialstate>) {
      state.boll = action.payload.boll;
      state.message = action.payload.message;
    },
  },
});

export const { UserInfo } = FormResponseSlice.actions;
export default FormResponseSlice.reducer;
