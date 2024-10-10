import React, { useState } from "react";
import { MdDelete } from "react-icons/md";
import { BiTask } from "react-icons/bi";

function TodoItem({ itemName, itemDate, onDeleteClick }) {
  let [deleteItem, setDeleteItem] = useState([]);

  return (
    <div className="container">
      <div className="row  todorow">
        <div className="col-6">
          <BiTask />&ensp;
          {itemName}
        </div>
        <div className="col-4">{itemDate}</div>
        <div className="col-2">
          <button
            type="button"
            className="btn btn-danger jb-btn"
            onClick={() => {
              onDeleteClick(itemName);
            }}
          >
            <MdDelete />
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default TodoItem;
