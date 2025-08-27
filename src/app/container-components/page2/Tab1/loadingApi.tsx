"use client"

import {LoadingOutlined} from "@ant-design/icons"
import Image from "next/image"
import styles from "../../../styles/container-styles/page2/loadingApi/loadingApi.module.css"

export function LoadingApi(){
    return (
    <div className={styles.principalComponent}>
    <Image src="/youtubeLogo.png" alt="youtube loading logo" height={200} width={200} className={styles.Image}></Image>
    <p className={styles.pharagraph}>  
        <span className={styles.span}>please loading </span>
     <LoadingOutlined /></p>
    </div>
    )
}