import windowStyles from "../components/baseWindow/BaseWindow.module.css";

export default function decideClass(name) {
  switch (name) {
    case "Update Log":
      return windowStyles.updateLog;

    case "Minesweeper":
      return windowStyles.minesweeper;

    default:
      return "";
  }
}
