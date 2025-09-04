"use client"

import { useSelector } from "react-redux";
import { RootState } from "../redux-toolkit/store";
import PageRegistration from "./page1/page";
import HomePage from "./page2/page"

export default function Home() {

  const selectSlice = useSelector((state:RootState)=>state.changePage)
  return (
    <div>
      {selectSlice == "pageRegistration" ? <PageRegistration/> : <HomePage></HomePage>}
    </div>
  );
}