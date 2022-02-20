import Minesweeper from "../components/minesweeper/Minesweeper";
import UpdateLog from "../components/updateLog/UpdateLog";

export default function decideWindow(name, props) {
  switch (name) {
    case "Update Log":
      return (
        <UpdateLog
          windows={props.windows}
          setWindows={props.setWindows}
          data={props.windows["Update Log"].data}
        />
      );
    case "Minesweeper":
      return (
        <Minesweeper
          windows={props.windows}
          setWindows={props.setWindows}
          data={props.windows["Minesweeper"].data}
        />
      );

    default:
      return <p>Lookie here</p>;
  }
}
