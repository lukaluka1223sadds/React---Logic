"use client"

import styles from "../../../styles/container-styles/Container-2/continer2-page.module.css"
import Image from "next/image"
import GestoreSubmitForm from "./formUseServer/page"
import { ChangeEvent, useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { RootState } from "@/app/redux-toolkit/store"
import { setFormStatus } from "@/app/redux-toolkit/slices/slice1/form"
import { formGestore } from "./function"
import { UserInfo } from "@/app/redux-toolkit/slices/slice1/formresponse"

export default function Container_2() {
    const [info, setInfo] = useState({ email: "", password: "" })
    const dispatch = useDispatch()
    const bollMessage = useSelector((state: RootState) => state.formresponse)
    const formstatus = useSelector((state:RootState)=>state.formresponse.boll)

    async function formGestoresend (e:FormData){
        const getUser = await formGestore(e)
        console.log("wwwwwwwwwwwwwwwwwwww")
        console.log(getUser)
        dispatch(UserInfo(getUser))
    }
    
    function infos(e: ChangeEvent<HTMLInputElement>) {
        if (e.target.name == "email") {
            setInfo({
                email: e.target.value,
                password: info.password
            })
        } else {
            setInfo({
                email: info.email,
                password: e.target.value
            })
        }
    }
    const emailPassword = { email: info.email, password: info.password }
    useEffect(() => { dispatch(setFormStatus(emailPassword)) }, [formstatus])

    
    
    return (
        <div className={styles.continer2}>
            <form action={formGestoresend} className={styles.form}>
                <input type="text" name="email" required onChange={infos} className={styles.formInputs} placeholder="input your email" />
                <br />
                <br />
                <input type="password" name="password" onChange={infos} required className={styles.formInputs} placeholder="input your password" />
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