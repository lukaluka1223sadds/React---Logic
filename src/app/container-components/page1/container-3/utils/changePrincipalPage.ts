import { changePage } from "@/app/redux-toolkit/slices/slice2/selectPage";
import { UnknownAction } from "@reduxjs/toolkit";
import { Dispatch } from "react";

export function changePrincipalPage(dispatch:Dispatch<UnknownAction>):void{
        dispatch(changePage("principalPage"))
    }