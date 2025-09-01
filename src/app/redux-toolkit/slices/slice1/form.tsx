import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ISlice1Initialstate} from "../../../common/interfaces/container2form";

const initialState : ISlice1Initialstate = {
    email:"",
    password:""
}

const SliceForm = createSlice({
    name:"slice1",
    initialState,
    reducers:{
        setFormStatus(state:ISlice1Initialstate,action:PayloadAction<ISlice1Initialstate>){
            state.email=action.payload.email
            state.password=action.payload.password
        }   
    }
})

export const {setFormStatus} = SliceForm.actions
export default SliceForm.reducer