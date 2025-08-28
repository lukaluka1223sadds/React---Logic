"use client"

import { Dispatch, SetStateAction, useEffect } from "react";

export function FetchRequest(setArr:Dispatch<SetStateAction<never[]>>){
      useEffect(() => {
    const apiRoute = fetch("/api/fetchRequest", {
      method: "POST", 
      headers: {
        "Content-Type": "application/json",
      },
    });

    async function fetchReq() {
      const resp = await apiRoute;
      setArr(await resp.json());
    }
    fetchReq();
  }, [setArr]);
}