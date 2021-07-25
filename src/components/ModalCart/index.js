import React from "react";

//import { ModalCart } from "./style";
import './style.css';
import Modal from 'react-bootstrap/Modal'
import Button from '../../components/Button';
import {Container, Row, Col} from 'react-bootstrap'
//import ModalClient from '../ModalClient';



const ModalCart = (props) => {

  const cart = props.cart;
  console.log(" Eiii cart peguei", cart);

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    //  className={styles.modal}
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Carrinho de compras
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
    
        <ul className="itemsCart">
          {cart.map(function (element, index) {
            return (
              <li key={`Item-${index}`} className="itemCart">

                <Container>
                  <Row md={4}>
                    <Col><img src={element.photo} width="50px" /></Col>
                    <Col xs={6}>
                      <h6>{element.name}</h6>
                    <p>{element.description}</p>
                    </Col>
                    <Col className="price"><p>R$ {element.price}</p></Col>
                  </Row>
                </Container>

                {/* <div className="d-flex justify-between">
                  <div><img src={element.photo} width="50px" /></div>
                  <div> 
                    <h6>{element.name}</h6>
                    <p>{element.description}</p>
                  </div>
                  <div> <p>{element.price}</p></div>
                </div> */}
              </li>
            );
          })}

        </ul>

      </Modal.Body>

      <Modal.Footer>
        <Button onClick={props.onHide}>Finalizar compra</Button>
      </Modal.Footer>
    </Modal>
    // <React.Fragment>

    // <Container>
    // <div className={showHideCart}>
    //   <div className="cart">
    // <div className=" cart-header">
    //          <h2>Carrinho</h2>
    //          <span className="close"> x </span>
    //   </div>
    //   <div className=" cart-body">
    //  <p>oiiii loja</p>
    //   </div>
    //   <div className=" cart-footer">
    //   <Button onClick={() => handleShow()}> Finalizar compra</Button>

    //   </div>

    //   </div>
    // </div>
    // </Container>
    //     <ModalClient show={modalClient} onHide={() => setModalClient(false)}/>
    //     </React.Fragment>


  );
};

export default ModalCart;
