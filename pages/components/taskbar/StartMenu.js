import WINDOW_TYPES from "../../helpers/windowTypes";
import styles from "./StartMenu.module.css";
import { v4 } from "uuid";

export default function StartMenu(props) {
  return (
    <div className={styles.container}>
      <div className={styles.topBar}>
        <span>User</span>
      </div>
      <div className={styles.menu}>
        <div className={styles.leftCol}>
          {WINDOW_TYPES().map((_window) => {
            return (
              <span
                key={v4()}
                onClick={() => {
                  if (!props.windows[_window]) {
                    let newTasks = props.tasks;
                    let task = {
                      top: 100,
                      left: 500,
                      title: _window,
                      selected: true,
                    };
                    newTasks.push(task);
                    props.setTasks(newTasks);
                    let newWindows = props.windows;
                    newWindows[_window] = task;
                    props.setWindows(newWindows);
                    props.setUpdate(props.update + 1);
                  } else if (!props.windows["Error"]) {
                    let newTasks = props.tasks;
                    let task = {
                      top: 100,
                      left: 500,
                      title: "Error",
                      selected: true,
                    };
                    newTasks.push(task);
                    props.setTasks(newTasks);
                    let newWindows = props.windows;
                    newWindows["Error"] = task;
                    props.setWindows(newWindows);
                    props.setUpdate(props.update + 1);
                  }
                }}
              >
                {_window}
              </span>
            );
          })}
        </div>
        <div className={styles.rightCol}>
          <span>Settings</span>
        </div>
      </div>
      <div className={styles.bottomBar}>
        <span>Log Off</span>
      </div>
    </div>
  );
}
