"use client";

import { TError } from "@/app/common/types/videoGetarray";
import { setvideosArray } from "@/app/redux-toolkit/slices/slice4/getArrayOfVideos";
import { UnknownAction } from "@reduxjs/toolkit";
import { Dispatch } from "react";

export async function FetchRequest(dispatch:Dispatch<UnknownAction>) {
      try {
      const apiRoute = fetch("/api/fetchRequest", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      });

        const resp = await apiRoute;

        if (resp.ok == false) {
          throw new Error()
        }
        dispatch(setvideosArray(await resp.json()));
    } catch {
      console.log("     internal error server 404 not found :(");
      dispatch(setvideosArray([{error :{ error: "internal error server 404" }}]));
    }
}
