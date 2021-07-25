import styled from 'styled-components';

export const Container = styled.div`
  width: 90%;
  margin: auto;
  z-index: -1;

 
  
  section {
    /* height: 100vh; */
    width: 100%;
    /* background-color: #e2e2; */
    display: flex;
    flex-wrap: wrap;
  
    .product-content {
      display: grid;
      text-align: center;
      /* height: 350px; */
      width: 28%;/*280px;*/
      min-width: 200px;
      background-color: #fff;
      border-radius: 12px;
      padding: 12px;
      /* padding: 0 12px 12px; */
      margin: 10px auto;
      text-align: center;
    }
    .product-content img{
      max-width: 100%;
      //width: 150px;
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