import { useState } from "react";
import { v4 } from "uuid";
import checkSurroundings from "../../helpers/checkSurroundings";
import Cell from "./Cell";
import styles from "./Minesweeper.module.css";

export default function Minesweeper(props) {
  const [board, setBoard] = useState(buildBoard());
  const [end, setEnd] = useState(false);
  const [update, setUpdate] = useState(true);
  function buildBoard() {
    let board = [];
    for (let i = 0; i < 12; i++) {
      board.push([]);
      let mines = 3;
      for (let k = 0; k < 12; k++) {
        if (Math.floor(Math.random() * 4) === 0 && mines > 0) {
          board[i].push({
            bomb: true,
            reveal: false,
            x: i,
            y: k,
          });
          mines--;
        } else {
          board[i].push({
            bomb: false,
            reveal: false,
            x: i,
            y: k,
          });
        }
      }
    }
    for (const row of board) {
      for (const cell of row) {
        if (board) {
          cell["number"] = checkSurroundings(board, cell.x, cell.y);
        }
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
    <div>
      <div className={styles.bar}>
        <span className={styles.score}>0</span>
        <button
          className={styles.restart}
          onClick={() => {
            let newBoard = buildBoard();
            setBoard(newBoard);
            setEnd(false);
            setUpdate(false);
            let newWindows = props.windows;
            newWindows["Minesweeper"].data = newBoard;
            props.setWindows(newWindows);
          }}
        >
          Restart {end ? ":(" : ":)"}
        </button>
        <span className={styles.score}>0</span>
      </div>
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
                    bomb={cell.bomb}
                    number={cell.number}
                    end={end}
                    setEnd={setEnd}
                    update={update}
                    setUpdate={setUpdate}
                  />
                );
              })}
            </div>
          );
        })}
      </div>
    </div>
  );
}
