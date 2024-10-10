import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import TodoItems from "./components/TodoItems";
import "./App.css";
import { useState } from "react";
import WelcomeMessage from "./components/WelcomeMessage";
import { TodoItemsContext } from "./store/todo-items-store";

function App() {
  const [todoItems, setTodoItems] = useState([]);

  let addNewItem = (newName, newDueDate) => {
    let name = newName;
    let dueDate = newDueDate;
    setTodoItems((currvalue) => {
      return [...currvalue, { name, dueDate }];
    });
  };

  let deleteTheItem = (todoItemName) => {
    let filteredItems = todoItems.filter((item) => item.name !== todoItemName);
    setTodoItems(filteredItems);
  };

  return (
    <TodoItemsContext.Provider
      value={{
        todoItems: todoItems,
        addNewItem: addNewItem,
        deleteTheItem: deleteTheItem,
      }}
    >
      <center className="todo-container">
        <AppName />
        <AddTodo />
        <WelcomeMessage />
        <TodoItems />
      </center>
    </TodoItemsContext.Provider>
  );
}

export default App;
