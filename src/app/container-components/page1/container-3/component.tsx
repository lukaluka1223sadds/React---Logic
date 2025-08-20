
import { useSelector } from "react-redux"

import styles from "../../../styles/container-styles/Container-3/page.module.css"
import { RootState } from "@/app/redux-toolkit/store"
export default function Container3component(){
    const selectForminfo = useSelector((state:RootState)=>state.formInfo)
    console.log(selectForminfo)
    return(
        <div className={styles.container3} style={{}}>
            <h1>enter as :</h1>
            <br></br>
            <p>
                email : {selectForminfo.email}<br></br>
                password : {selectForminfo.password}
            </p>
        </div>
    )
}