export default function checkSurroundings(board, x, y) {
  let bombs = 0;
  try {
    if (board[x + 1][y].bomb) {
      // right
      bombs++;
    }
  } catch {}
  try {
    if (board[x + 1][y + 1].bomb) {
      // up right
      bombs++;
    }
  } catch {}
  try {
    if (board[x + 1][y - 1].bomb) {
      // down right
      bombs++;
    }
  } catch {}
  try {
    if (board[x][y - 1].bomb) {
      // down
      bombs++;
    }
  } catch {}
  try {
    if (board[x][y + 1].bomb) {
      // up
      bombs++;
    }
  } catch {}
  try {
    if (board[x - 1][y].bomb) {
      // left
      bombs++;
    }
  } catch {}
  try {
    if (board[x - 1][y + 1].bomb) {
      // up left
      bombs++;
    }
  } catch {}
  try {
    if (board[x - 1][y - 1].bomb) {
      // down left
      bombs++;
    }
  } catch {}
  try {
    if (board[x][y].bomb) {
      bombs++;
    }
  } catch {}

  return bombs;
}
