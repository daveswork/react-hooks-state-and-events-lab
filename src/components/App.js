import React from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";
import { useState } from "react";

function App() {
  const [modeState, setModeState] = useState(false);
  // replace 'false' with a state variable that can be toggled between true and false
  // this will be used for the Dark Mode Toggle feature
  const appClass = modeState ? "App dark" : "App light"
  const modeText = modeState ? "Light Mode" : "Dark Mode"

  function handleClick(){
    setModeState(!modeState)
  }

  return (
    <div className={appClass}>
      <header>
        <h2>Shopster</h2>
        <button onClick={handleClick}>{modeText}</button>
      </header>
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;
