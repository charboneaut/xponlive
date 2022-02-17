import axios from "axios";
import { v4 } from "uuid";
import { useState } from "react";
import styles from "./UpdateLog.module.css";

export default function UpdateLog(props) {
  let filler = [];
  if (props.data) {
    filler = props.data;
  }
  const [msgs, setMsgs] = useState(filler);
  let i = 0;
  return (
    <div className={styles.updateLog}>
      {msgs.map((msg) => {
        if (i <= 5) {
          i++;
          return (
            <p key={v4()}>
              {msg.commit.committer.date} {msg.commit.message}
            </p>
          );
        }
      })}
      <button
        onClick={async () => {
          const data = await axios.get(
            "https://api.github.com/repos/charboneaut/xponlive/commits"
          );
          setMsgs(data.data);
          let newWindows = props.windows;
          newWindows["Update Log"].data = data.data;
          props.setWindows(newWindows);
        }}
      >
        Fetch
      </button>
    </div>
  );
}
