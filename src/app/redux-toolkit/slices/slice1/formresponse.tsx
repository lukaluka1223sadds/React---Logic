import { SliceResponseFormInitialstate } from "@/app/common/interfaces/container2form"
import { createSlice, PayloadAction } from "@reduxjs/toolkit"




let initialState :SliceResponseFormInitialstate ={boll:"",message:""}

const FormResponseSlice = createSlice({
    name:"FormResponse",
    initialState,
    reducers:{
        UserInfo(state,action:PayloadAction<SliceResponseFormInitialstate>){
            state.boll = action.payload.boll
            state.message = action.payload.message
        }
    }
})

export const { UserInfo } = FormResponseSlice.actions
export default FormResponseSlice.reducer