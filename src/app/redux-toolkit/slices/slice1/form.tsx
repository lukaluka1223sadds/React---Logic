import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Slice1Initialstate} from "../../../common/interfaces/container2form";

const initialState : Slice1Initialstate = {
    email:"",
    password:""
}

const SliceForm = createSlice({
    name:"slice1",
    initialState,
    reducers:{
        setFormStatus(state:Slice1Initialstate,action:PayloadAction<Slice1Initialstate>){
            state.email=action.payload.email
            state.password=action.payload.password
        }   
    }
})

export const {setFormStatus} = SliceForm.actions
export default SliceForm.reducer

