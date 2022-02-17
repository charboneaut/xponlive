import BaseWindowPreview from "../baseWindow/BaseWindowPreview.js";
import BaseErrorPreview from "../errors/BaseErrorPreview.js";
export default function BoxDragPreview(props) {
  if (!props.title) {
    return null;
  }
  if (props.title.title === "Error") {
    return (
      <div>
        <BaseErrorPreview preview box={props.title} />
      </div>
    );
  }
  return (
    <div>
      <BaseWindowPreview preview box={props.title} windows={props.windows} />
    </div>
  );
}
