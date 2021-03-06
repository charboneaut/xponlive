import decideClassMS from "../../helpers/decideClassMS";
import fillCells from "../../helpers/fillCells";
import styles from "./Minesweeper.module.css";

export default function Cell(props) {
  return (
    <>
      <span
        className={decideClassMS(
          props.reveal,
          props.update,
          props.flag,
          styles
        )}
        onClick={(e) => {
          if (!props.end && e.altKey) {
            let newBoard = props.board;
            if (newBoard[props.coords.x][props.coords.y].flag) {
              props.setScore(props.score + 1);
              newBoard[props.coords.x][props.coords.y].flag = false;
            } else {
              props.setScore(props.score - 1);
              newBoard[props.coords.x][props.coords.y].flag = true;
            }
            props.setBoard(newBoard);
            let newWindows = props.windows;
            newWindows["Minesweeper"].data = newBoard;
            props.setWindows(newWindows);
            props.setUpdate(true);
          } else if (!props.end) {
            let newBoard = props.board;
            newBoard[props.coords.x][props.coords.y].reveal = true;
            if (newBoard[props.coords.x][props.coords.y].bomb) {
              props.setEnd(true);
            }
            fillCells(newBoard, props.coords.x, props.coords.y);
            props.setBoard(newBoard);
            let newWindows = props.windows;
            newWindows["Minesweeper"].data = newBoard;
            props.setWindows(newWindows);
            props.setUpdate(true);
          }
        }}
      >
        {props.reveal && props.update ? (props.bomb ? "X" : props.number) : " "}
      </span>
    </>
  );
}
