import styles from "./page.module.css";
import Layout from "./page1/layout";

export default function Home() {
  return (
    <div className={styles.page}>
        <Layout></Layout>
    </div>
  );
}
