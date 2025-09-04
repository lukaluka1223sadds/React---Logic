import styles from "@/app/styles/container-styles/page2/ophenVideo/page.module.css";
import {
  LeftSquareTwoTone,
  RightSquareTwoTone,
  PauseCircleTwoTone,
} from "@ant-design/icons";
import { Dispatch, SetStateAction } from "react";

export function videoAfterEnter(
  h1Boll: boolean,
  setH1Boll: Dispatch<SetStateAction<boolean>>
) {
  return (
    <div style={{ opacity: 1 }}>
      <div
        className={h1Boll == true ? styles.mouseEnterDiv : styles.mouseLeaveDiv}
        onMouseLeave={() => setH1Boll(false)}
      ></div>
      <div className={h1Boll == true ?  styles.IconsAfter: styles.Icons}>
        <LeftSquareTwoTone />
        <PauseCircleTwoTone />
        <RightSquareTwoTone />
      </div>
      <h1
        className={
          h1Boll == true ? styles.mouseEnterLinea : styles.mouseLeaveLinea
        }
      />
    </div>
  );
}
