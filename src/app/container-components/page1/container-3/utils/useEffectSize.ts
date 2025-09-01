"use client"

import { Dispatch, SetStateAction, useEffect, useState } from "react"

export function FuseEffectSize(setSize: Dispatch<SetStateAction<string>>) {
  const [boll, setBoll] = useState(true);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setBoll(prev => !prev);
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    if (boll) {
      setSize("container3before");
    } else {
      setSize("container3after");
    }
  }, [boll, setSize]);
}