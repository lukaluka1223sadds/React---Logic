"use client";

import styles from "../../../styles/container-styles/page2/Container-1/page.module.css";
import { useState } from "react";
import QuadratiPrepere from "./prepereQuadrati";
import { IQuadratiCreator } from "@/app/common/interfaces/page2createQuadrati";
import { LoadingApi } from "./loadingApi";
import { ProvaContext } from "@/app/contextApi/page2Context/store";
import { FetchRequest } from "./utils/fetch_api/fetchRequest";

export function Tab1() {
  const [arr, setArr] = useState([]);
  const [quadratoKey, setQuadratoKey] = useState("-1");
  FetchRequest(setArr);
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
