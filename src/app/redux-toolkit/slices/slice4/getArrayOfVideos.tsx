import { IQuadratiCreator } from "@/app/common/interfaces/page2createQuadrati";
import { TError } from "@/app/common/types/videoGetarray";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const Slice4 = createSlice({
    name:"get videos array",
    initialState: [] as  IQuadratiCreator[] | TError[],
    reducers:{
        setvideosArray(state,action:PayloadAction<IQuadratiCreator[] | TError[]>){
            return action.payload
        }
    }
})

export const { setvideosArray } = Slice4.actions
export default Slice4.reducer