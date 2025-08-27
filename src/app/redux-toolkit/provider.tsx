"use client"

import { Provider } from "react-redux";
import { IChildren } from "../common/interfaces/redux-toolkit";
import Store from "./store"

export const ApiProvider = (props:IChildren) => {
    return  <Provider store={Store}>
                {props.children}
            </Provider>
}