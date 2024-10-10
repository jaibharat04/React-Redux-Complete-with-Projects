import React from "react";
import styles from "./ButtonsContainer.module.css";
import Button from "./Button"

function ButtonsContainer() {
  return (
    <div className={styles.buttonsContainer}>
      <Button/>
    </div>
  );
}

export default ButtonsContainer;
