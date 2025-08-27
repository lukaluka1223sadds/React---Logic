"use client"

import { RootState } from "@/app/redux-toolkit/store"
import { useSelector } from "react-redux"
import Container3component from "./component"
import styles from "../../../styles/container-styles/Container-3/page.module.css"

export default function Container_3() {
    const sliceForm = useSelector((state: RootState) => state.formresponse.boll)
    return (
        <div className={styles.container_3}>
            {sliceForm == "true" && <Container3component ></Container3component>}
        </div>
    )
}