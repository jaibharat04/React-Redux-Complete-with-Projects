import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import FoodItems from "./components/FoodItems";
import ErrorMessage from "./components/ErrorMessage";
import Container from "./components/Container";
import style from "./App.module.css";
import FoodInput from "./components/FoodInput";
import { useState } from "react";

function App() {
  let [foodItems, setFoodItems] = useState([]);

  const OnKeyDown = (event) => {
    if (event.key === "Enter") {
      let newFoodItem = event.target.value;
      event.target.value = "";
      setFoodItems([...foodItems, newFoodItem]);
    }
  };

  return (
    <Container>
      <h1 className={style.heading}>Healthy Food Items</h1>
      <FoodInput handleKeyDown={OnKeyDown} />
      <ErrorMessage foodkiItems={foodItems} />
      <FoodItems foodkiItems={foodItems} />
    </Container>
  );
}

export default App;
