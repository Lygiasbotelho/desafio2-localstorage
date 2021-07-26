import styled from "styled-components";

export const NavCart = styled.div`
    display: flex;
    justify-content: flex-end;
`

export const ButtonStyle = styled.button`
    width: 60px;
    height: 50px;
    outline: none;
    border: none;
    background: none;
    
    img{ 
      width: 30px;
    }

    span{
      background-color: red;
      border-radius: 50%;
      min-width: 15px;
      min-height: 13px;
      padding: 0 4px;
      margin-left: -5px;
      position: absolute;
      text-align: center;
      color: #fff;
      font-weight: bold;
      font-size: .7rem;
    }
 
  /* height: 50px;
  max-width: 100%;
  background-color: #e10f00;
  border-radius: 0.25rem;
  border: none;
  outline: none;
  color: #fff;
  font-size: .9rem;
  font-weight: bold;
  cursor: pointer;

  &:hover {
    background-color: #B40404;
    box-shadow: 0 0 1em #c3c3c3;
    font-size: .95rem;
    font-weight: 800;
  } */
`;
