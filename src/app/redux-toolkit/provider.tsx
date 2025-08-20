"use client"

import { Provider } from "react-redux";
import { Children } from "../common/interfaces/redux-toolkit";
import Store from "./store"

export const ApiProvider = (props:Children) => {
    return  <Provider store={Store}>
                {props.children}
            </Provider>
}