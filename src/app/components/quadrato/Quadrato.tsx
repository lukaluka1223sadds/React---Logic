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
  useEffect(() => {
    if (selectSlice.componentNumber === e.componentNumber) {
      console.log(selectSlice);
    }
  }, [selectSlice,e.componentNumber])
  return (
    <div
      className={styles.quadrato}
      style={{
        height: e.height,
        width: e.width
      }}
      onMouseEnter={()=>e.MouseEnter?setQuadratoKey(e.MouseEnter()): null}
      onMouseLeave={()=>e.MouseLeave ? setQuadratoKey(e.MouseLeave()) : null}
      onClick={()=>dispatch(changePage({page:"ophenedPage",componentNumber:e.componentNumber,image:e.image,channelName:e.channelName}))}
    >
      {e.children}
    </div>
  );
}
