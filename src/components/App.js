import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";

function App() {
  const [count, setCount] = useState(false)
  const appClass = count ? "App dark" : "App light"
  const buttonText = count ? 'Dark Mode' : 'Light Mode'

  return (
    <div className={appClass}>
      <header>
        <h2>Shopster</h2>
        <button onClick={ () => setCount(count => !count) }>
          { buttonText }
        </button>
      </header>
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;
