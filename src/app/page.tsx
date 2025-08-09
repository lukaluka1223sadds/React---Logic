import Image from "next/image";
import styles from "./page.module.css";
import  Container_1 from "./container-components/container-1/page"
import Container_2 from "./container-components/container-2/page";

export default function Home() {
  return (
    <div className={styles.page}>
      <Container_1></Container_1>
      <Container_2></Container_2>
    </div>
  );
}
