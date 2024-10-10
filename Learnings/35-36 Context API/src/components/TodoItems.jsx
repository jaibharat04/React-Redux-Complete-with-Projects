import { TodoItemsContext } from "../store/todo-items-store";
import TodoItem from "./TodoItem";
import styles from "./TodoItems.module.css";
import React, { useContext } from "react";

function TodoItems() {
  const { todoItems} = useContext(TodoItemsContext);

  return (
    <div>
      <div className={styles.itemContainer}>
        {todoItems.map((todoitem) => (
          <TodoItem
            key={todoitem.name}
            itemName={todoitem.name}
            itemDate={todoitem.dueDate}
          />
        ))}
      </div>
    </div>
  );
}

export default TodoItems;
