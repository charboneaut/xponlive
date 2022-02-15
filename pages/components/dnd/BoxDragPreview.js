import BaseWindowPreview from "../baseWindow/BaseWindowPreview.js";
function BoxDragPreview(props) {
  return (
    <div>
      <BaseWindowPreview preview box={props.title} />
    </div>
  );
}

export default BoxDragPreview;
