import styles from "@/pages/index.module.css";
import { Seo } from "../_seo";
import { publicPages } from "../../paths/routes";

export default function Home() {
  return (
    <div className={styles.container}>
      <Seo
        title={publicPages.index.title()}
        description={publicPages.index.description()}
        path={publicPages.index.path()}
      />
    </div>
  );
}
