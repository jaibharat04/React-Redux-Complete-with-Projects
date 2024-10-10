import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import TodoItems from "./components/TodoItems";
import "./App.css";
import { useState } from "react";
import WelcomeMessage from "./components/WelcomeMessage";

function App() {
  const [todoItems, setTodoItems] = useState([]);

  let handleNewItem = (newName, newDueDate) => {
    let name = newName;
    let dueDate = newDueDate;
    // setTodoItems([...todoItems, { name, dueDate }]);
    //alternate of the above line of code
    setTodoItems((currvalue) => {
      return [...currvalue, { name, dueDate }];
    });
  };

  let handleDeleteItem = (todoItemName) => {
    let filteredItems = todoItems.filter((item) => item.name !== todoItemName);
    setTodoItems(filteredItems);
  };

  return (
    <center className="todo-container">
      <AppName />
      <AddTodo onNewItem={handleNewItem} />
      {todoItems.length === 0 && <WelcomeMessage />}
      <TodoItems todoItems={todoItems} onDeleteClick={handleDeleteItem} />
    </center>
  );
}

export default App;
