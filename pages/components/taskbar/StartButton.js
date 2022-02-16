import { useState } from "react";
import styles from "./StartButton.module.css";
import StartMenu from "./StartMenu";

export default function StartButton(props) {
  const [expand, setExpand] = useState(false);
  if (!props.tasks) {
    return null;
  }
  return (
    <div
      className={expand ? `${styles.button} ${styles.clicked}` : styles.button}
      onClick={() => {
        setExpand(!expand);
      }}
    >
      {expand ? (
        <StartMenu
          tasks={props.tasks}
          setTasks={props.setTasks}
          windows={props.windows}
          setWindows={props.setWindows}
          update={props.update}
          setUpdate={props.setUpdate}
        />
      ) : (
        ""
      )}
      start
    </div>
  );
}
