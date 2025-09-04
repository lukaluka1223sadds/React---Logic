import { IQuadratiCreator } from "@/app/common/interfaces/page2createQuadrati";
import Quadrato from "@/app/components/quadrato/Quadrato";
import styles from "@/app/styles/container-styles/page2/ophenVideo/page.module.css";
import Image from "next/image";

export function generateVideos(selectSlice: IQuadratiCreator[]) {

  return (
    <div className={styles.ophenedPageVideos}>
      {selectSlice.map((e: IQuadratiCreator) => (
        <Quadrato
          channelName={e.author}
          height="250px"
          width="400px"
          componentNumber={e.id}
          key={e.id}
          image={e.download_url}
        >
          <Image src={e.download_url} alt="" width={400} height={210}></Image>
          {e.author}
        </Quadrato>
      ))}
    </div>
  );
}
