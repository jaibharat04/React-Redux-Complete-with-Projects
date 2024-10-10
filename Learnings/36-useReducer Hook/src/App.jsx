import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import TodoItems from "./components/TodoItems";
import "./App.css";
import { useReducer } from "react";
import WelcomeMessage from "./components/WelcomeMessage";
import { TodoItemsContext } from "./store/todo-items-store";

function todoItemsReducer(currTodoItems, action) {
  let newTodoItems = currTodoItems;

  switch (action.type) {
    case "ADD_ITEM": {
      newTodoItems = [
        ...currTodoItems,
        { name: action.payload.newName, dueDate: action.payload.newDueDate },
      ];
      break;
    }
    case "DELETE_ITEM":
      {
        newTodoItems = currTodoItems.filter(
          (item) => item.name !== action.payload.itemName
        );
      }
      break;
  }
  return newTodoItems;
}

function App() {
  const [todoItems, dispatchTodoItems] = useReducer(todoItemsReducer, []);

  const addNewItem = (newName, newDueDate) => {
    const newItemAction = {
      type: "ADD_ITEM",
      payload: {
        newName: newName,
        newDueDate: newDueDate,
      },
    };
    dispatchTodoItems(newItemAction);
  };

  const deleteTheItem = (todoItemname) => {
    const deleteItemAction = {
      type: "DELETE_ITEM",
      payload: {
        itemName: todoItemname,
      },
    };
    dispatchTodoItems(deleteItemAction);
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
