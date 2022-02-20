import decideClass from "../../helpers/decideClass";
import decideWindow from "../../helpers/decideWindow";
import UpdateLog from "../updateLog/UpdateLog";
import styles from "./BaseWindow.module.css";

export default function BaseWindowPreview(props) {
  if (!props.windows) {
    return null;
  }
  return (
    <div
      className={`window ${styles.login} ${decideClass(props.box.title)}`}
      role="DraggableBox"
    >
      <div className={`title-bar ${styles.heighted}`}>
        <div className="title-bar-text">{props.box ? props.box.title : ""}</div>
        <div className="title-bar-controls">
          <button aria-label="Minimize"></button>
          <button aria-label="Maximize"></button>
          <button aria-label="Close"></button>
        </div>
      </div>
      <div className={`window-body ${styles.body}`}>
        {decideWindow(props.box.title, props)}
      </div>
    </div>
  );
}
