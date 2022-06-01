import React, { useState } from "react";


function Item({ name, category }) {

  const [isInCart, setIsInCart] = useState(false)

  const cartClass = isInCart ? "in-cart" : null;

  function handleAddToCart() {
    console.log('hi')
    console.log(isInCart, cartClass)
    setIsInCart(!isInCart)
  }

  return (
    <li className={cartClass}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button onClick={handleAddToCart} className={isInCart ? 'remove' : 'add'}>
        {isInCart ? 'Remove From Cart' : 'Add to Cart'}
      </button>
    </li >
  );
}

export default Item;
