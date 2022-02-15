import { memo } from "react";
import BaseWindowPreview from "../baseWindow/BaseWindowPreview.js";
export const BoxDragPreview = memo(function BoxDragPreview(props) {
  return (
    <div>
      <BaseWindowPreview preview box={props.title} />
    </div>
  );
});
