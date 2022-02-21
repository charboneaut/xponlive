export default function fillCells(board, x, y) {
  try {
    if (board[x][y] > 0) {
      return board;
    }
  } catch {}
  try {
    if (board[x + 1][y].number === 0 && !board[x + 1][y].reveal) {
      board[x + 1][y].reveal = true;
      fillCells(board, x + 1, y);
    }
  } catch {}
  try {
    if (board[x][y + 1].number === 0 && !board[x][y + 1].reveal) {
      board[x][y + 1].reveal = true;
      fillCells(board, x, y + 1);
    }
  } catch {}
  try {
    if (board[x - 1][y].number === 0 && !board[x - 1][y].reveal) {
      board[x - 1][y].reveal = true;
      fillCells(board, x - 1, y);
    }
  } catch {}
  try {
    if (board[x][y - 1].number === 0 && !board[x][y - 1].reveal) {
      board[x][y - 1].reveal = true;
      fillCells(board, x, y - 1);
    }
  } catch {}
  return null;
}
