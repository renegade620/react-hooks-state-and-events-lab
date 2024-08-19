import React, { useCallback, useState } from "react";

function Item({ name, category }) {

  const [isInCart, setIsInCart] = useState(false);
  const inCart = isInCart ? "in-cart" : "";

  //function to handle click cart
  function handleClick() {
    setIsInCart((inCart) => !inCart);
  }
  return (
    <li className={inCart}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={handleClick}>{!isInCart ? "Add to Cart" : "Remove from Cart"}</button>
    </li>
  );
}

export default Item;
