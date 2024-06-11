import React, { useState } from "react";

function Item({ name, category }) {
  const [count, setCount] = useState(false)
  const updateClass = count ? 'in-cart' : ''
  const updateButtonText = count ? 'Remove From Cart' : 'Add to Cart'
  return (
    <li className={ updateClass }>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={() => setCount(count => !count)}>
        { updateButtonText }
      </button>
    </li>
  );
}

export default Item;
