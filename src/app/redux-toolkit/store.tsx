import { configureStore, createSlice } from "@reduxjs/toolkit";
import SliceForm from "./slices/slice1/form"
import FormResponseSlice from "../redux-toolkit/slices/slice1/formresponse"
import  MouseEnter  from "./slices/slice2/selectQuadrato";

const Store = configureStore({reducer:{
    formInfo:SliceForm,
    formresponse:FormResponseSlice,
}})

export type RootState = ReturnType<typeof Store.getState>
export default Store 