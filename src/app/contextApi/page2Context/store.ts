import { IProvaContextType } from "@/app/common/interfaces/contextApi";
import { createContext } from "react";


export const ProvaContext = createContext <IProvaContextType>({
    quadratoKey:"-1",
    setQuadratoKey:()=>{}
})
