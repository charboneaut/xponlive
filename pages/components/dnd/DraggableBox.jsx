import { memo, useEffect } from "react";
import { useDrag } from "react-dnd";
import { ItemTypes } from "./ItemTypes.js";
import { getEmptyImage } from "react-dnd-html5-backend";
import BaseWindow from "../baseWindow/BaseWindow.js";

function getStyles(left, top, isDragging) {
  const transform = `translate3d(${left}px, ${top}px, 0)`;

  return {
    position: "absolute",
    transform,
    WebkitTransform: transform,
    // IE fallback: hide the real node using CSS when dragging
    // because IE will ignore our custom "empty image" drag preview.
    opacity: isDragging ? 0 : 1,
    height: isDragging ? 0 : "",
  };
}
export const DraggableBox = memo(function DraggableBox(props) {
  const { id, title, left, top } = props;
  const [{ isDragging }, drag, preview] = useDrag(
    () => ({
      type: ItemTypes.BOX,
      item: { id, left, top, title },
      collect: (monitor) => ({
        isDragging: monitor.isDragging(),
      }),
    }),
    [id, left, top, title]
  );
  useEffect(() => {
    preview(getEmptyImage(), { captureDraggingState: true });
  }, []);
  const dnd = {
    top: top,
    left: left,
    drag: drag,
    isDragging: isDragging,
    getStyles: getStyles,
  };
  return (
    <BaseWindow
      dnd={dnd}
      windows={props.windows}
      setWindows={props.setWindows}
      box={props.box}
      tasks={props.tasks}
      setTasks={props.setTasks}
      minBox={props.minBox}
    />
  );
});
