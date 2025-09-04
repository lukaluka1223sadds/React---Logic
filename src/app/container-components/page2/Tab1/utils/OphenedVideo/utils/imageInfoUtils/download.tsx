import styles from "@/app/styles/container-styles/page2/ophenVideo/page.module.css"
import { useState } from "react"
import { CheckOutlined, DownloadOutlined } from "@ant-design/icons";

export function Download(){
    const [download , setDownload] = useState(false)
    return(
        <p className={styles.downloadVideo} onClick={()=>setDownload(true)}> 
                {download ? <><CheckOutlined /> downloaded</> : <><DownloadOutlined /> download </>}
        </p>
    )
}