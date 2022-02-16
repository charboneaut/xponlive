import { v4 } from "uuid";
import StartButton from "./StartButton";
import styles from "./Taskbar.module.css";

export default function Taskbar(props) {
  if (!props.tasks) {
    return null;
  }
  return (
    <div className={styles.taskbar}>
      <StartButton
        tasks={props.tasks}
        setTasks={props.setTasks}
        windows={props.windows}
        setWindows={props.setWindows}
        update={props.update}
        setUpdate={props.setUpdate}
      />
      <span className={styles.hide}>{props.update}</span>
      {Object.values(props.tasks).map((task) => {
        return (
          <span
            className={
              task.selected
                ? `${styles.task} ${styles.taskActive}`
                : task.title
                ? `${styles.task}`
                : `${styles.hide}`
            }
            onClick={() => {
              let newTasks = props.tasks;
              newTasks = newTasks.filter((_task) => {
                return _task.title;
              });
              let newWindows = props.windows;
              if (newWindows[task.title]) {
                let newWindows = props.windows;
                delete newWindows[task.title];
                props.setWindows(newWindows);
                props.setTasks([...props.tasks, {}]);
              } else {
                newWindows[task.title] = task;
                props.setTasks(newTasks);
                props.setWindows(newWindows);
              }
            }}
            key={v4()}
          >
            {task.title}
          </span>
        );
      })}
    </div>
  );
}
