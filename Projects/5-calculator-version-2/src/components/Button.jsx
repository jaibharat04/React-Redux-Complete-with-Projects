import React from "react";
import styles from "./Button.module.css";

function Button({ handleButtons }) {
  const buttonNames = [
    "C",
    "1",
    "2",
    "+",
    "3",
    "4",
    "-",
    "5",
    "6",
    "*",
    "7",
    "8",
    "/",
    "9",
    "0",
    "%",
    ".",
    "=",
  ];
  return (
    <>
      {" "}
      {buttonNames.map((buttonName) => (
        <button
          key={buttonName}
          className={styles.button}
          onClick={() => handleButtons(buttonName)}
        >
          {buttonName}
        </button>
      ))}
    </>
  );
}

export default Button;
