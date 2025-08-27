"use client"

import styles from "./page.module.css";
import Layout from "./container-components/page1/layout";
import { useSelector } from "react-redux";
import { RootState } from "./redux-toolkit/store";
import PageRegistration from "./container-components/page1/page";
import HomePage from "./container-components/page2/page"

export default function Home() {
  const selectSlice = useSelector((state:RootState)=>state.changePage)
  return (
    <div className={styles.page}>
      {selectSlice == "pageRegistration" ? <PageRegistration/>: <HomePage></HomePage>}
    </div>
  );
}
