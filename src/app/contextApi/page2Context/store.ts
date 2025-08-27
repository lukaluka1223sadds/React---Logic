import { createContext } from "react";

export interface ProvaContextType {
  quadratoKey: string;
  setQuadratoKey: (e: string) => void;
}

export const ProvaContext = createContext <ProvaContextType>({
    quadratoKey:"-1",
    setQuadratoKey:(e:string)=>{}
})
