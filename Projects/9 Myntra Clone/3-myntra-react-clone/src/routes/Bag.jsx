import React from "react";
import BagSummary from "../components/BagSummary";
import BagItem from "../components/BagItem";
import { useSelector } from "react-redux";

const Bag = () => {
  const bagItemIds = useSelector((store) => store.bag);
  const items = useSelector((store) => store.items);

  // const finalItems = items.filter((item) => {
  //   const itemIndex = bagItemIds.indexOf(item.id);
  //   return itemIndex >= 0;
  // });
  const finalItems = items.filter((item) => bagItemIds.includes(item.id));

  return (
    <main>
      <div className="bag-page">
        <div className="bag-items-container">
          {finalItems.map((item) => (
            <BagItem key={item.id} item={item} />
          ))}
        </div>
        <BagSummary />
      </div>
    </main>
  );
};

export default Bag;
