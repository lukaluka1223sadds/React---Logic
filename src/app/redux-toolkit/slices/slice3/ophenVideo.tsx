import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const Slice3 = createSlice({
    name:"ophen video",
    initialState:"page0",
    reducers:{
        changePage(state,action:PayloadAction<string>){
            return action.payload
        }
    }
})

export const { changePage } = Slice3.actions
export default Slice3.reducer