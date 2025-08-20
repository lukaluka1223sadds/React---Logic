import Image from "next/image";
import styles from "./page.module.css";
import  Container_1 from "./container-components/page1/container-1/page" 
import Container_2 from "./container-components/page1/container-2/page";
import Container_3 from "./container-components/page1/container-3/page";

export default function Home() {
  return (
    <div className={styles.page}>
      <Container_1></Container_1>
      <Container_2></Container_2>
      <Container_3></Container_3>
    </div>
  );
}
