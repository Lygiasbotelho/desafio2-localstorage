import styled from "styled-components";

export const ButtonStyle = styled.button`
  min-height: 40px;
  max-width: 100%;
  background-color: #e10f00;
  border-radius: 0.25rem;
  border: none;
  outline: none;
  color: #fff;
  font-size: .9rem;
  font-weight: bold;
  cursor: pointer;
  margin: auto;
  padding: 10px 25px;

  &:hover {
    background-color: #B40404;
    box-shadow: 0 0 1em #c3c3c3;
    font-size: .95rem;
    font-weight: 800;
  }
`;
