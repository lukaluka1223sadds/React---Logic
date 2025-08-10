import { configureStore, createSlice } from "@reduxjs/toolkit";
import SliceForm from "./slice"

const Store = configureStore({reducer:{
    formInfo:SliceForm
}})