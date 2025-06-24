import React from "react";
import { useState } from "react";

export default function Form({ handleAddItems }) {
  const [product, setProduct] = useState("");
  const [quantity, setQuantity] = useState(1);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!product) return;
    const newTodo = {
      id: Date.now(),
      product,
      quantity,
      packed: false,
    };
    handleAddItems(newTodo);
    setProduct("");
    setQuantity(1);
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <select
        className="select"
        value={quantity}
        onChange={(e) => setQuantity(Number(e.target.value))}
      >
        {[...Array(20)].map((_, index) => (
          <option key={index + 1} value={index + 1}>
            {index + 1}
          </option>
        ))}
      </select>

      <input
        className="input"
        type="text"
        placeholder="Enter a name"
        value={product}
        onChange={(e) => setProduct(e.target.value)}
      />
      <button className="button" type="submit">
        Add
      </button>
    </form>
  );
}
