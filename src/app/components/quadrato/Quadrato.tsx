"use client"
import { IChildren } from "@/app/common/interfaces/quadrato";
import styles from "../../styles/component-styles/quadrato/page.module.css";
import { useContext, useEffect } from "react";
import { ProvaContext } from "@/app/contextApi/page2Context/store";
import { changePage } from "../../redux-toolkit/slices/slice3/ophenVideo"
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/app/redux-toolkit/store";

export default function Quadrato(e: IChildren) {
  const {setQuadratoKey } = useContext(ProvaContext)
  const selectSlice = useSelector((state:RootState)=>state.ClickOphenVideo)
  
 const dispatch = useDispatch()
useEffect(()=>{console.log(selectSlice)},[selectSlice])
  return (
    <div
      className={styles.quadrato}
      onMouseEnter={()=>setQuadratoKey(e.MouseEnter())}
      onMouseLeave={()=>setQuadratoKey(e.MouseLeave())}
      onClick={()=>dispatch(changePage(selectSlice == "page0" ? "page1" : "page0"))}
    >
      {e.children}
    </div>
  );
}
