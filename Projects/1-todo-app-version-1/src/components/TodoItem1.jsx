import React from "react";

function TodoItem1() {
  return (
    <div className="container">
      <div class="row  todorow">
        <div class="col-6">Buy Milk</div>
        <div class="col-4">10/10/2004</div>
        <div class="col-2">
          <button type="button" class="btn btn-danger jb-btn">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default TodoItem1;
