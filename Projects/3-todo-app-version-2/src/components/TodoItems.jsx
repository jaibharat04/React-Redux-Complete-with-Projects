import TodoItem from "./TodoItem";
import styles from "./TodoItems.module.css"

import React from "react";

function TodoItems({ todoItems }) {
  return (
    <div>
      <div className={styles.itemContainer}>
        {todoItems.map((todoitem) => (
          <TodoItem key = {todoitem.name} itemName={todoitem.name} itemDate={todoitem.dueDate} />
        ))}
      </div>
    </div>
  );
}

export default TodoItems;
