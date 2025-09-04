"use client"
import styles from "../../../styles/container-styles/Container-2/continer2-page.module.css"
import Image from "next/image"
import { FormEvent, useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { RootState } from "@/app/redux-toolkit/store"
import { setFormStatus } from "@/app/redux-toolkit/slices/slice1/form"
import { Infos } from "./utils/infos/infos"
import { formGestoresend } from "./utils/formGestoreSend/formGestoreSend"
import { SubmitButton } from "@/app/components/submitButton/ButtonSubmit"

export default function Container_2() {
    const [info, setInfo] = useState({ email: "", password: "" })
    const [ophenWindow , setOphenWindow ] = useState(false)
    const dispatch = useDispatch()
    const bollMessage = useSelector((state: RootState) => state.formresponse)
    const formstatus = useSelector((state:RootState)=>state.formresponse.boll)

    useEffect(() => {
        const emailPassword = { email: info.email, password: info.password }
        dispatch(setFormStatus(emailPassword)) 
    }, [formstatus, dispatch , info.email, info.password])

    useEffect(()=>setOphenWindow(Boolean(formstatus)) , [formstatus])

    function handleSubmit (event:FormEvent<HTMLFormElement>){
        event.preventDefault()
        formGestoresend(info , dispatch)
    }

    return (
        <div className={styles.continer2} >
            <form onSubmit={handleSubmit} className={styles.form}>
                <input type="text" name="email" required onChange={(event)=>setInfo(Infos(info,event))} className={styles.formInputs} placeholder="input your email" suppressHydrationWarning={true} />
                <br />
                <br />
                <input type="password" name="password" onChange={(event)=>setInfo(Infos(info,event))} required className={styles.formInputs} placeholder="input your password" suppressHydrationWarning={true}/>
                <br />
                <br />
                <SubmitButton></SubmitButton>
                <br />
                <br />
                {
                    ophenWindow == true && (bollMessage.boll === "true" ? <div className={styles.responseBoll}>{bollMessage.message}</div> : <div className={styles.responseBoll1}>{bollMessage.message}</div>)
                }
            </form>
            <Image src="/register.png" height={250} width={250} alt="" className={styles.image1}></Image>
        </div>
    )
 }