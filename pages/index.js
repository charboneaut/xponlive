import { useState } from "react";
import styles from "../styles/Home.module.css";
import Taskbar from "./components/taskbar/Taskbar";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import Desktop from "./components/dnd/Desktop.js";
import WINDOW_TYPES from "./helpers/windowTypes";

export default function Home() {
  let demoWindows = {};
  let demoTasks = [];
  let totalLeft = 50;
  for (const item of WINDOW_TYPES()) {
    let task = {
      top: 100,
      left: totalLeft,
      title: item,
      selected: false,
    };
    demoWindows[item] = task;
    demoTasks.push(task);
    totalLeft += 350;
  }

  const [windows, setWindows] = useState(demoWindows);
  const [tasks, setTasks] = useState(demoTasks);

  return (
    <DndProvider backend={HTML5Backend}>
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
        />
      </div>
    </DndProvider>
  );
}
