import { useState, useCallback } from "react";
import Container from "./Container.js";
import CustomDragLayer from "./CustomDragLayer.js";
export default function Desktop(props) {
  const [snapToGridAfterDrop, setSnapToGridAfterDrop] = useState(false);
  const [snapToGridWhileDragging, setSnapToGridWhileDragging] = useState(false);
  const handleSnapToGridAfterDropChange = useCallback(() => {
    setSnapToGridAfterDrop(!snapToGridAfterDrop);
  }, [snapToGridAfterDrop]);
  const handleSnapToGridWhileDraggingChange = useCallback(() => {
    setSnapToGridWhileDragging(!snapToGridWhileDragging);
  }, [snapToGridWhileDragging]);
  return (
    <div>
      <Container
        snapToGrid={snapToGridAfterDrop}
        windows={props.windows}
        setWindows={props.setWindows}
        tasks={props.tasks}
        setTasks={props.setTasks}
      />
      <CustomDragLayer snapToGrid={snapToGridWhileDragging} />
    </div>
  );
}
