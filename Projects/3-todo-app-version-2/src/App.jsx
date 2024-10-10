import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import TodoItems from "./components/TodoItems";
import "./App.css";

function App() {
  const todoItems = [
    {
      name: "Milk",
      dueDate: "26/07/2024",
    },
    {
      name: "Go to College",
      dueDate: "29/07/2024",
    },
    {
      name: "Meeting",
      dueDate: "29/07/2024",
    },
  ];
  return (
    <center className="todo-container">
      <AppName />
      <AddTodo />
      <TodoItems todoItems={todoItems} />
    </center>
  );
}

export default App;
