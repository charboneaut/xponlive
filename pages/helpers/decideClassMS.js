export default function decideClassMS(reveal, update, flag, styles) {
  if (!styles) {
    return null;
  }
  if (reveal && update) {
    return styles.cellReveal;
  } else if (flag && update) {
    return `${styles.flag} ${styles.cell}`;
  } else {
    return styles.cell;
  }
}
