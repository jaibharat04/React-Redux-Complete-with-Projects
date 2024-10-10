import React, { useRef } from "react";
import { MdAddBox } from "react-icons/md";

function AddTodo({ onNewItem }) {
  const todoNameElement = useRef();
  const dueDateElement = useRef();

  let handleAddButtonClicked = () => {
    const todoName = todoNameElement.current.value;
    const dueDate = dueDateElement.current.value;
    todoNameElement.current.value = "";
    dueDateElement.current.value = "";
    onNewItem(todoName, dueDate);
  };

  return (
    <div className="container">
      <form className="row todorow">
        <div className="col-6">
          <input
            type="text"
            ref={todoNameElement}
            placeholder="Enter Todo Here"
          />
        </div>
        <div className="col-4">
          <input type="date" ref={dueDateElement} />
        </div>
        <div className="col-2">
          <button
            type="button"
            className="btn btn-success jb-btn"
            onClick={handleAddButtonClicked}
          >
            <MdAddBox />
            Add Todo
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddTodo;
