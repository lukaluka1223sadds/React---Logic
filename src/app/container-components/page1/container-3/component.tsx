"use state"

import { useDispatch, useSelector } from "react-redux"
import styles from "../../../styles/container-styles/Container-3/page.module.css"
import { RootState } from "@/app/redux-toolkit/store"
import { useEffect, useState } from "react"
import { changePage } from "@/app/redux-toolkit/slices/slice2/selectPage"


export default function Container3component() {
    const [size, setSize] = useState("container3before")
    const selectForminfo = useSelector((state: RootState) => state.formInfo)
    const dispatch = useDispatch()
    console.log(selectForminfo)

    useEffect(() => {
        let boll = true
        setInterval(() => { 
            boll == true ? boll=false : boll=true
            if (boll) {
                setSize( "container3before" )
            } else {
                setSize( "container3after" )
            }
        },1000)
    }, [])

    function a(){
        dispatch(changePage("principalPage"))
    }

    return (
        <div className={styles[size]} style={{ padding: `${size}px` }} onClick={a}>
            <h1>enter as :</h1>
            <br></br>
            <p>
                email : {selectForminfo.email}<br></br>
                password : {selectForminfo.password}
            </p>
        </div>
    )
}