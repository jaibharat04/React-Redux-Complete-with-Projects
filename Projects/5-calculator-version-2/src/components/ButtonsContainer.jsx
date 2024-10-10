import React from "react";
import styles from "./ButtonsContainer.module.css";
import Button from "./Button"

function ButtonsContainer({handleButtons}) {
  return (
    <div className={styles.buttonsContainer}>
      <Button handleButtons = {handleButtons}/>
    </div>
  );
}

export default ButtonsContainer;
