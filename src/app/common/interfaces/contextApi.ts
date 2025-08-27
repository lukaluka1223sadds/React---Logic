export interface IPrincipalContext {
    selectPage:string,
    setSelectPage:(state:string)=>void
}

export interface IProvaContextType {
  quadratoKey: string;
  setQuadratoKey: (e: string) => void;
}