import { formGestore } from "@/app/lib/page1/container2"
import { UserInfo } from "@/app/redux-toolkit/slices/slice1/formresponse"
import { UnknownAction } from "@reduxjs/toolkit"
import { Dispatch } from "react"
import { IEmailPassword } from "@/app/common/interfaces/container2form"

export async function formGestoresend (e: IEmailPassword, dispatch:Dispatch<UnknownAction>){
        const getUser = await formGestore(e)
        dispatch(UserInfo(getUser))
    }