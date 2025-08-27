import Image from "next/image"
import styles from "../../styles/component-styles/logo/page.module.css"

export function Logo(){
    return(
        <div>
            <Image src="/narutoLogo.png" alt="" height={100} width={100} className={styles.logo}></Image>
        </div>
    )
}