import React from "react";
import style from "./Item.module.css";

function Items({ fitem, handleBuyButton, bought }) {
  return (
    <>
      <li className={`${style.item} list-group-item ${bought && 'active'} `}>
        {fitem}
        <button
          onClick={(event) => handleBuyButton(event)}
          className={`${style.button} btn btn-info`}
        >
          Buy
        </button>
      </li>
    </>
  );
}

export default Items;
