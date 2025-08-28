"use client"

import styles from "../../../styles/container-styles/Container-2/continer2-page.module.css"
import Image from "next/image"
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { RootState } from "@/app/redux-toolkit/store"
import { setFormStatus } from "@/app/redux-toolkit/slices/slice1/form"
import { Infos } from "./utils/infos/page"
import { formGestoresend } from "./utils/formGestoreSend/page"

export default function Container_2() {
    const [info, setInfo] = useState({ email: "", password: "" })
    const dispatch = useDispatch()
    const bollMessage = useSelector((state: RootState) => state.formresponse)
    const formstatus = useSelector((state:RootState)=>state.formresponse.boll)

    useEffect(() => {
         const emailPassword = { email: info.email, password: info.password }
        dispatch(setFormStatus(emailPassword)) 
    }, [formstatus, dispatch , info.email, info.password])

    return (
        <div className={styles.continer2}>
            <form action={(event)=>formGestoresend(event , dispatch)} className={styles.form}>
                <input type="text" name="email" required onChange={(event)=>setInfo(Infos(info , event))} className={styles.formInputs} placeholder="input your email" />
                <br />
                <br />
                <input type="password" name="password" onChange={(event)=>setInfo(Infos(info , event))} required className={styles.formInputs} placeholder="input your password" />
                <br />
                <br />
                <button type="submit" className={styles.formInputs}>submit</button>
                <br />
                <br />
                {
                    bollMessage.boll == "" ? "" : bollMessage.boll === "true" ? <div className={styles.responseBoll}>{bollMessage.message}</div> : <div className={styles.responseBoll1}>{bollMessage.message}</div>
                }
            </form>
            <Image src="/register.png" height={250} width={250} alt="" className={styles.image1}></Image>
        </div>
    )
}