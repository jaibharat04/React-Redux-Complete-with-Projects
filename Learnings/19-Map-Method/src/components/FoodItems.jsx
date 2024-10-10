import { useState } from "react";
import Items from "./Items";

function FoodItems({ foodkiItems }) {
  let [activeItems, setActiveItems] = useState([]);

  let onBuyButton = (event, item) => {
    let newItems = [...activeItems, item];
    // console.log(activeItems)
    setActiveItems(newItems);
  };

  return (
    <>
      <ul className="list-group">
        {foodkiItems.map((item) => (
          <Items
            key={item}
            fitem={item}
            bought={activeItems.includes(item)}
            handleBuyButton={(event) => onBuyButton(event, item)}
          />
        ))}
      </ul>
    </>
  );
}

export default FoodItems;
