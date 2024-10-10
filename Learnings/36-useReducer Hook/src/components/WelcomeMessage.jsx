import React, { useContext } from "react";
import style from "./WelcomeMessage.module.css";
import { TodoItemsContext } from "../store/todo-items-store";

function WelcomeMessage() {
  const contextObj = useContext(TodoItemsContext);
  const todoItems = contextObj.todoItems;

  return (
    todoItems.length === 0 && <p className={style.welcome}>Enjoy your Day</p>
  );
}

export default WelcomeMessage;
