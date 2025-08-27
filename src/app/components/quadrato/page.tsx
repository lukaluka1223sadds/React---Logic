import { IChildren } from "@/app/common/interfaces/quadrato";
import styles from "../../styles/component-styles/quadrato/page.module.css";
import { useContext } from "react";
import { ProvaContext } from "@/app/contextApi/page2Context/store";

export default function Quadrato(e: IChildren) {
  const {setQuadratoKey } = useContext(ProvaContext)

  return (
    <div
      className={styles.quadrato}
      onMouseEnter={()=>setQuadratoKey(e.MouseEnter)}
      onMouseLeave={()=>setQuadratoKey(e.MouseLeave )}
    >
      {e.children}
    </div>
  );
}
