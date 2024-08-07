import React from "react";
import { useState } from "react";

function Item({ name, category }) {
  const [isInCart, setIsInCart] = useState(false)

  const inCart = isInCart ? "in-cart" : ""
  const actionForCart = isInCart ? "Remove From Cart" : "Add to Cart"
  const buttonClassForCart = isInCart ? "remove" : "add"

  function handleClick(){
    setIsInCart(!isInCart)
  }

  return (
    <li className={inCart}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button onClick={handleClick} className={buttonClassForCart}>{actionForCart}</button>
    </li>
  );
}

export default Item;
