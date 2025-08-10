import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const SliceForm = createSlice({
    name:"slice1",
    initialState:"undefined",
    reducers:{
        setFormStatus:(state:string,action:PayloadAction<string>){
            state=action.payload
        }
})

export const {setFormStatus} = SliceForm.actions
export default SliceForm.reducer