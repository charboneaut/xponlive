import { useCallback } from "react";
import { useDrop } from "react-dnd";
import DraggableBox from "./DraggableBox.js";
import { snapToGrid as doSnapToGrid } from "./snapToGrid.js";
import update from "immutability-helper";
const styles = {
  width: "100vw",
  height: "98vh",
  border: "1px solid black",
  position: "relative",
};
export default function Container(props, { snapToGrid }) {
  const moveBox = useCallback(
    (id, left, top) => {
      props.setWindows(
        update(props.windows, {
          [id]: {
            $merge: { left, top },
          },
        })
      );
    },
    [props.windows]
  );
  const [, drop] = useDrop(
    () => ({
      accept: "box",
      drop(item, monitor) {
        const delta = monitor.getDifferenceFromInitialOffset();
        let left = Math.round(item.left + delta.x);
        let top = Math.round(item.top + delta.y);
        if (snapToGrid) {
          [left, top] = doSnapToGrid(left, top);
        }
        moveBox(item.id, left, top);
        return undefined;
      },
    }),
    [moveBox]
  );
  return (
    <div ref={drop} style={styles}>
      {Object.keys(props.windows).map((key) => (
        <DraggableBox
          key={key}
          id={key}
          box={props.windows[key]}
          {...props.windows[key]}
          windows={props.windows}
          setWindows={props.setWindows}
          tasks={props.tasks}
          setTasks={props.setTasks}
        />
      ))}
    </div>
  );
}
