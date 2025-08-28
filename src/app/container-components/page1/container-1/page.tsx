import Image from "next/image";
import img from "../../../../../public/blogging-570x321-1-570x321-2lm9ons.png";
import styles from "../../../styles/container-styles/Container-1/container1-page.module.css";
export default function Container_1() {
  return (
    <div className={styles.container}>
      <Image src={img} className={styles.img1} alt=""></Image>
      <center>
        {/* esLint-disabile-next-line */}
        <h1 className={styles.h1text}>React Logic Progect : Social Blog </h1>
      </center>
    </div>
  );
}
