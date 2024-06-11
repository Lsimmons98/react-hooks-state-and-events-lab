import React, { useState } from "react";
import Item from "./Item";

function ShoppingList({ items }) {

  const [count, setCount] = useState('All')
  const filterByCategory = count === 'All' ? items : items.filter(item => item.category === count)

  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select onChange={(event) => setCount(event.target.value)} name="filter">
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        { filterByCategory.map((item) => (
    <Item key={item.id} name={item.name} category={item.category} />
  )) }
      </ul>
    </div>
  );
}

export default ShoppingList;
