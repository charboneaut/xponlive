import styles from "../baseWindow/BaseWindow.module.css";

export default function BaseErrorPreview(props) {
  if (!props.box) {
    return null;
  }
  return (
    <div className={`window ${styles.error}`} role="DraggableBox">
      <div className={`title-bar ${styles.heighted}`}>
        <div className="title-bar-text">{props.box ? props.box.title : ""}</div>
        <div className="title-bar-controls">
          <button aria-label="Close"></button>
        </div>
      </div>
      <div className={`window-body ${styles.body}`}>
        <span>Something went wrong.</span>
        <button className={styles.right}>Close</button>
      </div>
    </div>
  );
}
