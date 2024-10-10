import { useState } from "react";
import styles from "./App.module.css";
import ButtonsContainer from "./components/ButtonsContainer";
import Display from "./components/Display";

function App() {
  let [calval, setCalval] = useState("");

  let handleButttons = (buttonText) => {
    if (buttonText === "=") {
      const result = eval(calval);
      setCalval(result);
    } else if (buttonText === "C") {
      setCalval("");
    } else {
      setCalval(calval + buttonText);
    }
  };

  return (
    <div className={styles.Container}>
      <div className={styles.calculator}>
        <Display displayVal={calval} />
        <ButtonsContainer handleButtons={(event) => handleButttons(event)} />
      </div>
    </div>
  );
}

export default App;
