import React from "react";

import { NavCart, ButtonStyle } from "./style";
import Cart from "../../assets/cart.png";



const ButtonCart = ({
   onClick,
  // children,
  count,
}) => {
  
  return (
    <NavCart>
      <ButtonStyle onClick={onClick}>
        <img src={Cart} alt="cart" />
        <span>{count}</span>
      </ButtonStyle>
    </NavCart>
  );
};

export default ButtonCart;
