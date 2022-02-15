import BaseWindowPreview from "../baseWindow/BaseWindowPreview.js";
export default function BoxDragPreview(props) {
  return (
    <div>
      <BaseWindowPreview preview box={props.title} />
    </div>
  );
}
