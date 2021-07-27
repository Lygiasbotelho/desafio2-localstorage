import styled from 'styled-components';

export const Container = styled.div`
  width: 90%;
  margin: auto;
  z-index: -1;
  
  section {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
  
    .product-content {
      display: grid;
      text-align: center;
      width: 28%;
      min-width: 200px;
      background-color: #fff;
      border-radius: 12px;
      padding: 12px;
      margin: 10px auto;
      text-align: center;
    }
    .product-content img{
      max-width: 100%;
      margin: auto;
    }
    
    .product-content .description{
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }
    .description h4{
      padding-top: 10px;
      padding-bottom: 10px;
    }
    .description span {
      font-size: 0.8rem;
      color: #585858;
      padding-bottom: 10px;

    }
    .description .price {
      color: #333333;
    }
    @media(max-width: 767px) {
      .product-content {
        width: 90%;
      }
  }
  }
`
export const Banner = styled.div`
background-color: #000;
  img{ width:100%}
`