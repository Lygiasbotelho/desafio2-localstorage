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

  const addItemCart = (index) => {
  
    setCart([...cart, data[index]]);  
    const productStore = JSON.stringify(cart);
    localStorage.setItem(`@cart`, productStore);
  
  }

  useEffect(() => {
    api.get("").then((response) => {
      setData(response.data);
    });
  }, []);

  return (
    <React.Fragment>
    <Banner><img src={ImgBanner} alt="banner" width="30px"/></Banner>
    <Container>
    <ButtonCart onClick={() => setModalShow(true)} count={cart.length} />
      <section>
        {data.map((prod, index) => (
          <div className="product-content" key={`product-${index}`}>
            <img
              src={prod.photo}
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
        cart={cart}
        />
    </React.Fragment>
  );
};

export default Home;
