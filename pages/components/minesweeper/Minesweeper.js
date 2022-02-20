import { useState } from "react";
import { v4 } from "uuid";
import Cell from "./Cell";
import styles from "./Minesweeper.module.css";

export default function Minesweeper(props) {
  const [board, setBoard] = useState(buildBoard());
  function buildBoard() {
    let board = [];
    for (let i = 0; i < 12; i++) {
      board.push([]);
      for (let k = 0; k < 12; k++) {
        board[i].push({
          bomb: true,
          reveal: false,
          x: i,
          y: k,
        });
      }
    }

    return board;
  }
  let filler = [];
  if (props.data) {
    filler = props.data;
  } else {
    filler = board;
  }
  let i = 0;
  return (
    <div className={styles.board}>
      {filler.map((row) => {
        let k = 0;
        i++;
        return (
          <div className={styles.row} key={v4()}>
            {row.map((cell) => {
              k++;
              return (
                <Cell
                  coords={{ x: i - 1, y: k - 1 }}
                  key={v4()}
                  setBoard={setBoard}
                  board={board}
                  reveal={cell.reveal}
                  windows={props.windows}
                  setWindows={props.setWindows}
                />
              );
            })}
          </div>
        );
      })}
    </div>
  );
}
