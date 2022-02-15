import styles from "./BaseWindow.module.css";

export default function BaseWindowPreview(props) {
  return (
    <div className={`window ${styles.login}`} role="DraggableBox">
      <div className={`title-bar ${styles.heighted}`}>
        <div className="title-bar-text">{props.box ? props.box.title : ""}</div>
        <div className="title-bar-controls">
          <button aria-label="Minimize"></button>
          <button aria-label="Maximize"></button>
          <button aria-label="Close"></button>
        </div>
      </div>
      <div className="window-body">
        <p>There's so much room for activities!</p>
      </div>
    </div>
  );
}
