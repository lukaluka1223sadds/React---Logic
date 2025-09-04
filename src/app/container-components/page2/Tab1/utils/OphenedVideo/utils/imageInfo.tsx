import { imageInfo } from "@/app/common/interfaces/page2Utils";

import styles from "@/app/styles/container-styles/page2/ophenVideo/page.module.css"
import Image from "next/image";
import { LikeDislike } from "./imageInfoUtils/LikeDislike";
import { Download } from "./imageInfoUtils/download";

export function ImageInfo(e:imageInfo){
    return(
        <div className={styles.ImageInfoDiv}>
            <Image src={e.image_Download} alt="icon channel image" height={70} width={70} className={styles.ImageIcon}></Image>
            <h2 className={styles.h2}><b>{e.channelName}</b></h2>
            <LikeDislike></LikeDislike>
            <Download></Download>
        </div>
    )
}