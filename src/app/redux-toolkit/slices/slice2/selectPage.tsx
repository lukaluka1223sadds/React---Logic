import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const Slice2 = createSlice({
    name:"select page",
    initialState:"pageRegistration",
    reducers:{
        changePage(state , action:PayloadAction<string>){
            state = action.payload
            return action.payload
        }
    }
})

export const {changePage} = Slice2.actions
export default Slice2.reducer