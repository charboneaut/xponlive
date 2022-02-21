import fillCells from "../../helpers/fillCells";
import styles from "./Minesweeper.module.css";

export default function Cell(props) {
  return (
    <>
      <span
        className={
          props.reveal && props.update ? styles.cellReveal : styles.cell
        }
        onClick={() => {
          if (!props.end) {
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
