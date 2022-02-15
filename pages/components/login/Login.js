import styles from "./Login.module.css";

export default function Login(props) {
  return (
    <div className={`window ${styles.login}`}>
      <div className={`title-bar ${styles.heighted}`}>
        <div className="title-bar-text">Login</div>
        <div className="title-bar-controls">
          <button
            aria-label="Minimize"
            onClick={() => props.setLogin(2)}
          ></button>
          <button aria-label="Maximize"></button>
          <button aria-label="Close" onClick={() => props.setLogin(0)}></button>
        </div>
      </div>
      <div className="window-body">
        <p>There's so much room for activities!</p>
      </div>
    </div>
  );
}
