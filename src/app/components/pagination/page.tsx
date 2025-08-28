"use client"
import React from "react";
import { Tabs } from "antd";
import type { TabsProps } from "antd";
import {
  HomeOutlined,
  CalendarOutlined,
  CommentOutlined,
} from "@ant-design/icons";
import { Logo } from "@/app/components/logo/page";
import { Tab1 } from "../../container-components/page2/Tab1/page";
import Image from "next/image";
import styles from "../../styles/container-styles/pagination/page.module.css";

const onChange = (key: string) => {
  console.log(key);
};

const Items: TabsProps["items"] = [
  {
    key: "1",
    label: "Home",
    children: <Tab1></Tab1>,
    icon: <HomeOutlined />,
  },
  {
    key: "2",
    label: "Iscrizioni",
    children: "Content of Tab Pane 2",
    icon: <CalendarOutlined />,
  },
  {
    key: "3",
    label: "Notifiche",
    children: "Content of Tab Pane 3",
    icon: <CommentOutlined />,
  },
  {
    key: "4",
    label: "Tu",
    children: "Content of Tab Pane 3",
    icon: <Logo></Logo>,
  },
];

const App: React.FC = () => (
  <>
    <Image
      src="/youtubeLogo.png"
      alt="youtube logo pagination"
      height={70}
      width={70}
      className={styles.Image}
    ></Image>
    <b className={styles.span}>YOU TUBE</b>
    <Tabs
      defaultActiveKey="1"
      style={{ margin: "0px 30px 0px 30px" }}
      items={Items}
      onChange={onChange}
    />
  </>
);

export default App;
