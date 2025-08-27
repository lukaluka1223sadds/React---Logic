"use client";

import styles from "../../../styles/container-styles/page2/Container-1/page.module.css";
import { useEffect, useState } from "react";
import QuadratiPrepere from "./prepereQuadrati";
import { IQuadratiCreator } from "@/app/common/interfaces/page2createQuadrati";
import { LoadingApi } from "./loadingApi";
import { ProvaContext } from "@/app/contextApi/page2Context/store";

export function Tab1() {
  const [arr, setArr] = useState([]);
  const [quadratoKey, setQuadratoKey] = useState("-1");

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
  }, []);

  return (
    <ProvaContext.Provider value={{ quadratoKey, setQuadratoKey }}>
      <div className={styles.Tab1}>
        {arr.length !== 0 ? (
          arr.map((e: IQuadratiCreator) => (
            <QuadratiPrepere e={e} componentNumber={e.id} key={e.id} />
          ))
        ) : (
          <LoadingApi></LoadingApi>
        )}
      </div>
    </ProvaContext.Provider>
  );
}
