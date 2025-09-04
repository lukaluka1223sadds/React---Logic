import { configureStore} from "@reduxjs/toolkit";
import SliceForm from "./slices/slice1/form"
import FormResponseSlice from "../redux-toolkit/slices/slice1/formresponse"
import Slice2  from "./slices/slice2/selectPage";
import Slice3 from "./slices/slice3/ophenVideo"
import Slice4 from "./slices/slice4/getArrayOfVideos"

const Store = configureStore({reducer:{
    formInfo:SliceForm,
    formresponse:FormResponseSlice,
    changePage:Slice2,
    ClickOphenVideo:Slice3,
    GetVideosArray:Slice4
}})

export type RootState = ReturnType<typeof Store.getState>
export default Store