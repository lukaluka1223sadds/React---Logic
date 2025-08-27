"use client";

import Quadrato from "../../../components/quadrato/page";
import Image from "next/image";
import styles from "../../../styles/container-styles/page2/Container-1/page.module.css";
import { IQuadratiCreator } from "@/app/common/interfaces/page2createQuadrati";
import { getRandomInt } from "@/app/lib/page2_Tab1/randomNumber";
import { useContext, useMemo } from "react";
import { ClockCircleTwoTone, ProfileTwoTone } from "@ant-design/icons";
import { ProvaContext } from "@/app/contextApi/page2Context/store";

export default function quadratiPrepere({
  e,
  componentNumber,
}: {
  e: IQuadratiCreator;
  componentNumber: string;
}) {
  const { quadratoKey } = useContext(ProvaContext);
  const daysAgo = useMemo(() => getRandomInt(0, 30), []);
  return (
    <Quadrato
      key={componentNumber}
      componentNumber={componentNumber}
      MouseEnter={componentNumber}
      MouseLeave={"-1"}
    >
      <Image
        src={e.download_url}
        style={{ borderRadius: "4%" }}
        height={220}
        width={410}
        alt="videos image"
      />
      {quadratoKey !== "-1" && quadratoKey == e.id ? (
        <div className={styles.icons}>
          <ClockCircleTwoTone />
          <ProfileTwoTone />
        </div>
      ) : (
        ""
      )}
      <p className={styles.videosInfos}>
        <b>
          {e.author}
          <br />
          {daysAgo} days ago
        </b>
      </p>
    </Quadrato>
  );
}
