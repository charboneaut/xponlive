import { useState } from "react";
import styles from "../styles/Home.module.css";
import Taskbar from "./components/taskbar/Taskbar";
import Desktop from "./components/dnd/Desktop.js";

export default function Home() {
  const [windows, setWindows] = useState({});
  const [tasks, setTasks] = useState([]);
  const [update, setUpdate] = useState("");

  return (
    <div className={styles.desktop}>
      <Desktop
        windows={windows}
        setWindows={setWindows}
        tasks={tasks}
        setTasks={setTasks}
      />
      <Taskbar
        tasks={tasks}
        setTasks={setTasks}
        windows={windows}
        setWindows={setWindows}
        update={update}
        setUpdate={setUpdate}
      />
    </div>
  );
}
