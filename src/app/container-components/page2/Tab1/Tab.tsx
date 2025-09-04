"use client";

import { useEffect, useState } from "react";
import { ProvaContext } from "@/app/contextApi/page2Context/store";
import { mapQuadrati } from "./utils/mapQuadrati";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/app/redux-toolkit/store";
import OphenedVideo from "./utils/OphenedVideo/OphenedVideo";
import { FetchRequest } from "./utils/fetch_api/fetchRequest";
import { LoadingApi } from "../loadingApi";

export function Tab1() {
  const arr = useSelector((state:RootState)=>state.GetVideosArray)
  const [quadratoKey, setQuadratoKey] = useState("-1");
  const selectSlice = useSelector((state: RootState) => state.ClickOphenVideo);
  const dispatch = useDispatch()
  useEffect(()=>{FetchRequest(dispatch)},[dispatch])

function throwError(){
  console.error("Internal error encountered: arr.length is 1, which is an unexpected state.");
  throw new Error("Internal error: Unexpected array length. Please check the video array state.");
}

  const renderContent = () => {
    if (selectSlice.page === "ophenedPage") {
      return <OphenedVideo QuadratoInfo={selectSlice} />;
    }else if ( arr.length == 0 ){
      return <LoadingApi></LoadingApi>
    } else if ( arr.length == 1) {
      throwError();
      return null; 
    } else {
      return mapQuadrati( {  array : arr });
    }
  };

  return (
    <ProvaContext.Provider value={{ quadratoKey, setQuadratoKey }}>
      {renderContent()}
    </ProvaContext.Provider>
  );
}