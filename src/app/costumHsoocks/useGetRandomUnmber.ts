"use client"

import { useMemo } from "react"
import { randomNumber } from "../container-components/page2/Tab1/utils/OphenedVideo/utils/randomNumber"

export function useRandomNumber(){
    return useMemo(() => randomNumber(), [])
}