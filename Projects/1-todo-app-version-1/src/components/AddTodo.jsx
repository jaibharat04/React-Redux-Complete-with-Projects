import React from "react";

function AddTodo() {
  return (
    <div className="container">
      <div class="row todorow">
      <div class="col-6">
      <input type="text" placeholder="Enter Todo Here" />
      </div>
      <div class="col-4">
        <input type="date" />
      </div>
      <div class="col-2">
      <button type="button" class="btn btn-success jb-btn">Success</button>
      </div>
    </div>
    </div>
  );
}

export default AddTodo;
