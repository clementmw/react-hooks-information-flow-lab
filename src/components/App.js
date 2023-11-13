import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";
import Header from "./Header";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
 

  function onDarkModeClick() {
    setIsDarkMode((isDarkMode) => !isDarkMode);
    
  }

  return (
    <div className={"App " + (isDarkMode ? "dark" : "light")}>
     
        <h2>Shopster</h2>
        <button onClick={onDarkModeClick}>
          {isDarkMode ? "Dark" : "Light"} Mode
        </button>
      <ShoppingList items={itemData} />
      <Header mode = {onDarkModeClick}/>
    </div>
  );
}

export default App;
