import React from "react";

function TodoItem2() {
  let todoName = "Go to College";
  let todoDate = "19/07/2024";

  return (
    <div className="container">
      <div class="row todorow">
        <div class="col-6">{todoName}</div>
        <div class="col-4">{todoDate}</div>
        <div class="col-2">
          <button type="button" class="btn btn-danger jb-btn">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default TodoItem2;
