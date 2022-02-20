import styles from "./Minesweeper.module.css";

export default function Cell(props) {
  return (
    <span
      className={props.reveal ? styles.cellReveal : styles.cell}
      onClick={() => {
        let newBoard = props.board;
        newBoard[props.coords.x][props.coords.y].reveal = true;
        props.setBoard(newBoard);
        let newWindows = props.windows;
        newWindows["Minesweeper"].data = newBoard;
        props.setWindows(newWindows);
      }}
    >
      {props.reveal ? (props.bomb ? "O" : "X") : " "}
    </span>
  );
}
