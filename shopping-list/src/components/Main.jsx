import React from "react";
// import shoppingList from "../data/data";
import List from "./List";
import Form from "./Form";

export default function Main({
  items,
  handleAddItems,
  handleDeleteItem,
  handleDoneItem,
}) {
  const [sortBy, setSortBy] = React.useState("input");
  let sortedItems;
  if (sortBy === "input") {
    sortedItems = items;
  }
  if (sortBy === "packed") {
    sortedItems = [...items].sort(
      (a, b) => Number(a.packed) - Number(b.packed)
    );
  }

  return (
    <div>
      <Form
        handleAddItems={handleAddItems}
        handleDeleteItem={handleDeleteItem}
      />
      <ul className="mainWrapper">
        {sortedItems.map((item) => (
          <List
            key={item.id}
            item={item}
            handleDoneItem={handleDoneItem}
            handleDeleteItem={handleDeleteItem}
          />
        ))}
      </ul>
      <div>
        <select
          className="select"
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
        >
          <option value="input">Sort By Input</option>
          <option value="packed">Sort By Packed</option>
        </select>
      </div>
    </div>
  );
}
