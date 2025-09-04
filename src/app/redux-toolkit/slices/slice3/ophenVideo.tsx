import { IOphenPage } from "@/app/common/interfaces/redux-toolkit";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const Slice3 = createSlice({
    name:"ophen video",
    initialState:{page:"",componentNumber:"",image:"",channelName:""},
    reducers:{
        changePage(state,action:PayloadAction<IOphenPage>){
            return action.payload
        }
    }
})

export const { changePage } = Slice3.actions
export default Slice3.reducer