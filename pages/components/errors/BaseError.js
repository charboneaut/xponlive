import BaseWindow from "../baseWindow/BaseWindow";

export default function BaseError(props) {
  const err = "Something went wrong.";
  return (
    <BaseWindow
      err={err}
      dnd={props.dnd}
      windows={props.windows}
      setWindows={props.setWindows}
      box={props.box}
      tasks={props.tasks}
      setTasks={props.setTasks}
      minBox={props.minBox}
    />
  );
}
