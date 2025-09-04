import styles from "../../../../styles/container-styles/page2/Container-1/page.module.css";
import QuadratiPrepere from "./prepereQuadrati";
import { IQuadratiCreator } from "@/app/common/interfaces/page2createQuadrati";
import { LoadingApi } from "../../loadingApi";
import { TError } from "@/app/common/types/videoGetarray";

export function mapQuadrati({  array }:{array:IQuadratiCreator[] |  TError[]}) {
  return (
    <div className={styles.Tab1}>
      {Array.isArray(array) && array.every((item) => 'id' in item) ? (
        array.map((e: IQuadratiCreator) => (
          <QuadratiPrepere e={e} componentNumber={e.id} key={e.id} />
        ))
      ) : (
        <LoadingApi></LoadingApi>
      )}
    </div>
  );
}