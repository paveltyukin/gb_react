import styles from "./main-page.module.css";

export function MainPageTemplate({ header, children }) {
  return (
    <div className={styles.body}>
      <div className={styles.header}>{header}</div>

      <div className={styles.content}>
        <div>{children}</div>
      </div>
    </div>
  );
}
