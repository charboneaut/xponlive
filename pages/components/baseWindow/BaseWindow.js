import { WINDOW_TYPES } from "../../helpers/windowTypes";
import styles from "./BaseWindow.module.css";

export default function BaseWindow(props) {
  return (
    <div
      className={`window ${styles.login} ${
        props.box.selected ? styles.selected : styles.unselectedBorder
      }`}
      style={props.dnd.getStyles(
        props.dnd.left,
        props.dnd.top,
        props.dnd.isDragging,
        props.windows[props.box.title]
      )}
      role="DraggableBox"
      onClick={(e) => {
        if (String(e.target).search("Button") !== -1) {
          return;
        }

        let newWindows = props.windows;
        let newTasks = props.tasks;
        for (const task in newTasks) {
          if (newTasks[task]) {
            newTasks[task].selected = false;
          }
        }
        for (const window of WINDOW_TYPES) {
          try {
            newWindows[window].selected = false;
          } catch (err) {
            // console.log(err);
          }
        }
        try {
          newWindows[props.box.title].selected = true;
        } catch (err) {
          // console.log(err);
        }
        newTasks = newTasks.find((task) => {
          if (task.title === props.box.title) {
            task.selected = true;
            return true;
          } else {
            return false;
          }
        });

        props.setWindows(newWindows);
        props.setTasks([...props.tasks, {}]);
      }}
    >
      <div
        className={`title-bar ${styles.heighted} ${
          props.box.selected ? "" : styles.unselected
        }`}
        ref={props.dnd.drag}
      >
        <div className="title-bar-text">{props.box.title}</div>
        <div className="title-bar-controls">
          <button
            aria-label="Minimize"
            onClick={() => {
              let newWindows = props.windows;
              delete newWindows[props.box.title];
              props.setWindows(newWindows);
              props.setTasks([...props.tasks, {}]);
            }}
          ></button>
          <button aria-label="Maximize"></button>
          <button
            aria-label="Close"
            onClick={() => {
              let newWindows = props.windows;
              delete newWindows[props.box.title];
              let newTasks = props.tasks.filter((task) => {
                return task.title !== props.box.title;
              });
              props.setWindows(newWindows);
              props.setTasks(newTasks);
            }}
          ></button>
        </div>
      </div>
      <div className="window-body">
        <p>There's so much room for activities!</p>
      </div>
    </div>
  );
}
