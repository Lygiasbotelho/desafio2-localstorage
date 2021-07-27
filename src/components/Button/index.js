import React from "react";
import { ButtonStyle } from "./style";

const Button = ({
  onClick,
  children,
  type,
}) => {

  return (
    <ButtonStyle onClick={onClick} type={type}> {children}</ButtonStyle>
  );

}


export default Button;