import React from "react";
import style from "./FoodInput.module.css";

function FoodInput( {handleKeyDown}) {
  return (
    <>
      <input
        type="text"
        placeholder="Enter the food item here"
        className={style.foodInput}
        onKeyDown={handleKeyDown}
      />
    </>
  );
}

export default FoodInput;
