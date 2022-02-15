import styles from "./StartButton.module.css";

export default function StartButton() {
  return (
    <div
      className={styles.button}
      onClick={(e) => {
        if (e.currentTarget.classList.length === 1) {
          e.currentTarget.className = `${styles.button} ${styles.clicked}`;
        } else {
          e.currentTarget.className = `${styles.button}`;
        }
      }}
    >
      start
    </div>
  );
}
