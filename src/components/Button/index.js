import React from "react";

import { ButtonStyle } from "./style";


const Button = ({ 
  onClick, 
  children,

}) => { 

  return (
    <ButtonStyle onClick={onClick}> {children}</ButtonStyle>
  );

}


export default Button;