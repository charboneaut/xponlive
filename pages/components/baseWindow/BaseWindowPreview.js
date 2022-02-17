import UpdateLog from "../updateLog/UpdateLog";
import styles from "./BaseWindow.module.css";

export default function BaseWindowPreview(props) {
  if (!props.title) {
    return null;
  }
  function decideWindow(name) {
    switch (name) {
      case "Update Log":
        return <UpdateLog data={props.windows["Update Log"].data} />;

      default:
        return <p>Lookie here</p>;
    }
  }
  function decideClass(name) {
    switch (name) {
      case "Update Log":
        return styles.updateLog;

      default:
        return "";
    }
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
        {decideWindow(props.box.title)}
      </div>
    </div>
  );
}
