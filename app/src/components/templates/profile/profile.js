import styles from "./profile.module.css";

export function ProfileTemplate({ header, children }) {
  return (
    <div className={styles.body}>
      <div className={styles.header}>{header}</div>

      <div className={styles.content}>
        <div className={styles.profile}>{children}</div>
      </div>
    </div>
  );
}
