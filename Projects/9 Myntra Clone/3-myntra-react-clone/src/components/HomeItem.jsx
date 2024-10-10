import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { bagActions } from "../store/bagSlice";
import { CgAddR } from "react-icons/cg";
import { MdDelete } from "react-icons/md";
import toast, { Toaster } from "react-hot-toast";

const HomeItem = ({ item }) => {
  const bagItemIds = useSelector((store) => store.bag);
  const dispatch = useDispatch();

  const elementFound = bagItemIds.indexOf(item.id) >= 0;

  const handleAddTOBag = () => {
    toast.success("Item added to bag");
    dispatch(bagActions.addToBag(item.id));
  };

  const handleRemove = () => {
    dispatch(bagActions.removeFromBag(item.id));
    toast.success("Item removed from bag");
  };

  return (
    <div className="item-container">
      <Toaster />
      <img className="item-image" src={item.image} alt="item image" />
      <div className="rating">
        {item.rating.stars} ⭐ | {item.rating.count}
      </div>
      <div className="company-name">{item.company}</div>
      <div className="item-name">{item.item_name}</div>
      <div className="price">
        <span className="current-price">Rs {item.current_price}</span>
        <span className="original-price">Rs {item.original_price}</span>
        <span className="discount">({item.discount_percentage}% OFF)</span>
      </div>
      {elementFound ? (
        <button
          type="button"
          className="btn btn-add-bag btn-danger"
          onClick={handleRemove}
        >
          <MdDelete />
          Remove
        </button>
      ) : (
        <button
          type="button"
          className="btn btn-add-bag btn-success"
          onClick={handleAddTOBag}
        >
          <CgAddR />
          Add to Bag
        </button>
      )}
    </div>
  );
};

export default HomeItem;
