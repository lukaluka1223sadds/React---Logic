"use client"

import { useDispatch, useSelector } from "react-redux"
import styles from "../../../styles/container-styles/Container-3/page.module.css"
import { RootState } from "@/app/redux-toolkit/store"
import { useState } from "react"
import { FuseEffectSize } from "./utils/useEffectSize"
import { changePrincipalPage } from "./utils/changePrincipalPage"


export default function Container3component() {
    const [size, setSize] = useState("container3before")
    const selectForminfo = useSelector((state: RootState) => state.formInfo)
    const dispatch = useDispatch()

    FuseEffectSize(setSize)

    return (
        <div className={styles[size]} style={{ padding: `${size}px` }} onClick={()=>{changePrincipalPage(dispatch)}}>
            <h1>enter as :</h1>
            <br></br>
            <p>
                email : {selectForminfo.email}<br></br>
                password : {selectForminfo.password}
            </p>
        </div>
    )
}