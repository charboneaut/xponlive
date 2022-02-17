import axios from "axios";
import { v4 } from "uuid";
import { useState } from "react";
import styles from "./UpdateLog.module.css";
import rateLimit from "axios-rate-limit";

export default function UpdateLog(props) {
  const [dont, setDont] = useState(false);
  const http = rateLimit(axios.create(), {
    maxRequests: 0.1,
    perMilliseconds: 5000,
    maxRPS: 1,
  });
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
        disabled={dont}
        onClick={async () => {
          const data = await http.get(
            "https://api.github.com/repos/charboneaut/xponlive/commits"
          );
          setMsgs(data.data);
          let newWindows = props.windows;
          newWindows["Update Log"].data = data.data;
          props.setWindows(newWindows);
          setDont(true);
          setTimeout(() => {
            setDont(false);
          }, 5000);
        }}
      >
        Fetch
      </button>
    </div>
  );
}
