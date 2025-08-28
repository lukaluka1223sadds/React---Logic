import { configureStore} from "@reduxjs/toolkit";
import SliceForm from "./slices/slice1/form"
import FormResponseSlice from "../redux-toolkit/slices/slice1/formresponse"
import Slice2  from "./slices/slice2/selectPage";

const Store = configureStore({reducer:{
    formInfo:SliceForm,
    formresponse:FormResponseSlice,
    changePage:Slice2
}})

export type RootState = ReturnType<typeof Store.getState>
export default Store 