import React, {useState} from "react";
import Item from "./Item";


function ShoppingList({ items }) {
  const [filteredList, setFilteredList] = useState("All")

  function handleChange(event){
    setFilteredList(event.target.value)
  }

  const myFilteredList = items.filter(item => {
    if (filteredList === "All"){
      return true
    } else {
      return filteredList === item.category
    }
  })
  
  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select onChange={handleChange} name="filter">
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {myFilteredList.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
