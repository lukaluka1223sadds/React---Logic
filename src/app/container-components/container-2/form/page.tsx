"use client"
import { getApi } from "./formSend"
import styles from "../../../styles/container-styles/Contianer-2/continer2-page.module.css"
import Image from "next/image"
import registerImage from "../../../../../public/register.png"

export default function (){
    function formGestore(e:FormData){
        const email = e.get("email")?.toString() as string
        const password = e.get("password")?.toString() as string
        getApi({email ,password})
    }
    return(
        <div className={styles.containerForm}>
        <form action={formGestore} className={styles.form}>
            <input type="text" name="email" required className={styles.formInputs}/>
            <br />
            <br />
            <input type="password" name="password" required className={styles.formInputs}/>
            <br />
            <br />
            <input type="submit" placeholder="submit" className={styles.formInputs}/>
        </form>
        <Image src={registerImage} alt="" className={styles.Image1}></Image>
        </div>
    )
}