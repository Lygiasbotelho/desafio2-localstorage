import React, { useState, useEffect } from "react";
import { Container, Banner } from "./style";
import api from "../../services/api";
import Button from '../../components/Button';
import ButtonCart from '../../components/ButtonCart';
import ModalCart from '../../components/ModalCart';
import ImgBanner from '../../assets/Banner3.svg';


const Home = () => {
  const [data, setData] = useState([]);
  const [cart, setCart] = useState([]);
  const [modalShow, setModalShow] = React.useState(false);
 // const [show, setShow] = useState(false);

  const handleShow = () => {

    if(modalShow) {
      setModalShow(false);
    } 
    else { setModalShow(true)}
  };
  

  const addItemCart = (index) => {
 
    // let product = [...cart, cart.push(data[index])]
  
    setCart([...cart, data[index]]);
    
    const productStore = JSON.stringify(cart);
      
    localStorage.setItem(`@cart`, productStore);
  
    console.log("Eii", cart);
  
  }
  // const removeItem = (itemToBeDeleted) => {
  //   setItems(items.filter((item) => itemToBeDeleted !== item));
  // };
// const seeCart = () => {
//   console.log("Eii cliquei");
// }

  useEffect(() => {
    api.get("").then((response) => {
      setData(response.data);
    });
  }, []);
console.log(" Eii show", modalShow);
  return (
    <React.Fragment>
    <Banner><img src={ImgBanner} alt="banner" width="30px"/></Banner>
   
   
    <Container>
    {/* <ButtonCart onClick={handleShow} count={cart.length} /> */}
    <ButtonCart onClick={() => setModalShow(true)} count={cart.length} />
    {/* () => setModalShow(true) */}
      <section>
        {data.map((prod, index) => (
          <div className="product-content" key={`product-${index}`}>
            <img
              src={prod.photo} // width="225"// height="auto"
              alt="sapato"
            />
            <div className="description">
              <h4>{prod.name}</h4>
              <span>{prod.description}</span>
              <h6 className="price">R$ {prod.price}</h6>
              <Button onClick={() => addItemCart(index)}> Adicionar ao carrinho</Button>
            </div>
          </div>
        ))}
      </section>
    </Container>
    <ModalCart  show={modalShow}
        onHide={() => setModalShow(false)}
        />
    </React.Fragment>
  );
};

export default Home;
