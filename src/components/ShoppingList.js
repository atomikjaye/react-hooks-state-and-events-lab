import React, { useState } from "react";
import Item from "./Item";



function ShoppingList({ items }) {
  console.log(items)
  const [selectedCategory, setSelectedCategory] = useState('All')

  function handleCategoryChange(e) {
    setSelectedCategory(e.target.value)
  }

  const filteredList = items.filter((item) => {
    if (selectedCategory === 'All') {
      return true
    } else {
      return item.category === selectedCategory
    }
  })
  console.log(filteredList)

  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select name="filter" onChange={handleCategoryChange}>
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {filteredList.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
