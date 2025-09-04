"use client"

import { IOphenPage } from "@/app/common/interfaces/redux-toolkit";
import styles from "@/app/styles/container-styles/page2/ophenVideo/page.module.css";
import Image from "next/image";
import { videoAfterEnter } from "./utils/mouseEnterLeaveVideo";
import { useSelector } from "react-redux";
import { RootState } from "@/app/redux-toolkit/store";
import { generateVideos } from "./utils/generateVideos";
import { Col, Row } from "antd";
import { ImageInfo } from "./utils/imageInfo";
import { useState } from "react";
import { IQuadratiCreator } from "@/app/common/interfaces/page2createQuadrati";

interface OphenedVideoProps {
  QuadratoInfo: IOphenPage;
}

export default function OphenedVideo({ QuadratoInfo }: OphenedVideoProps) {
  const [isHovered, setIsHovered] = useState(false);
  const videosArray = useSelector((state: RootState) => state.GetVideosArray);
  
  return (
    <div className={styles.HomeDiv}>
      <div>
        <Image
          src={QuadratoInfo.image}
          height={550}
          width={1000}
          alt="Video thumbnail"
          onMouseEnter={() => setIsHovered(true)}
          className={styles.Video}
        />
        {videoAfterEnter(isHovered, setIsHovered)}
        <ImageInfo
          image_Download={QuadratoInfo.image}
          channelName={QuadratoInfo.channelName}
        />
      </div>
      <Row>
        <Col>
          <hr className={styles.h1} />
        </Col>
        <Col className={styles.Col}>
          <br />
          <h1>More Videos</h1>
          <br />
          {generateVideos(videosArray as IQuadratiCreator[])}
        </Col>
      </Row>
    </div>
  );
}