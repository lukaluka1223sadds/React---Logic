import { formGestore } from "@/app/lib/page1/container2"
import { UserInfo } from "@/app/redux-toolkit/slices/slice1/formresponse"
import { UnknownAction } from "@reduxjs/toolkit"
import { Dispatch } from "react"

export async function formGestoresend (e:FormData , dispatch:Dispatch<UnknownAction>){
        const getUser = await formGestore(e)
        dispatch(UserInfo(getUser))
    }