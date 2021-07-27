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
`;
