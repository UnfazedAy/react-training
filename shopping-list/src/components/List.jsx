import React from "react";

export default function List({ item, handleDeleteItem, handleDoneItem }) {
  const { product, quantity, packed } = item;
  return (
    <li className="listWrapper">
      <span>{quantity}</span>
      <p style={packed ? { textDecoration: "line-through" } : {}}>{product}</p>
      <div>
        <button className="doneBtn" onClick={() => handleDoneItem(item.id)}>
          Done
        </button>
        <button className="deleteBtn" onClick={() => handleDeleteItem(item.id)}>
          delete
        </button>
      </div>
    </li>
  );
}
