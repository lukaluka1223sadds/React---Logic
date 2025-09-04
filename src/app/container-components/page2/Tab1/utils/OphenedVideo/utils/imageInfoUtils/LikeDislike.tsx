"use client";

import styles from "@/app/styles/container-styles/page2/ophenVideo/page.module.css";
import { DislikeFilled, DislikeTwoTone, LikeFilled, LikeTwoTone } from "@ant-design/icons";
import { useState } from "react";
import { useRandomNumber } from "@/app/costumHsoocks/useGetRandomUnmber";

export function LikeDislike() {
  const [like, setLike] = useState(false);
  const [disLike, setDisLike] = useState(false);
  const likeRandomNumber = useRandomNumber()
  const dislikeRandomNumber = useRandomNumber()

  function setLikeDislike(e: string) {
    switch (e) {
      case "like":
        setDisLike(false);
        setLike(prevState => !prevState);
        break;
      case "dislike":
        setDisLike(prevState => !prevState);
        setLike(false);
    }
  }

  return (
    <div className={styles.LikeDislike}>
      <p className={styles.P} onClick={() => setLikeDislike("like")}>
        {like ? <LikeFilled /> : <LikeTwoTone />}
        {like ? Number(likeRandomNumber) + 1 : likeRandomNumber}
      </p>
      <p className={styles.P} onClick={() => setLikeDislike("dislike")}>
        {disLike ? <DislikeFilled /> : <DislikeTwoTone />}
        {disLike ? Number(dislikeRandomNumber) + 1 : dislikeRandomNumber}
      </p>
    </div>
  );
}
