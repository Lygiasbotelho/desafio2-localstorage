import React from "react";
import './style.css';
import Modal from 'react-bootstrap/Modal'
import Button from '../../components/Button';
import { Container, Row, Col } from 'react-bootstrap'
import ModalClient from '../ModalClient';


const ModalCart = (props) => {

  const [modalClient, setModalClient] = React.useState(false);

  const handleClient = () => {
    setModalClient(true);
    props.onHide();
  }

  return (
    <React.Fragment>

      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Carrinho de compras
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>

          <ul className="itemsCart">
            {props.cart.map(function (element, index) {
              return (
                <li key={`Item-${index}`} className="itemCart">

                  <Container>
                    <Row md={4}>
                      <Col><img src={element.photo} width="50px" alt={element.name} /></Col>
                      <Col xs={6}>
                        <h6>{element.name}</h6>
                        <p>{element.description}</p>
                      </Col>
                      <Col className="price"><p>R$ {element.price}</p></Col>
                    </Row>
                  </Container>

                </li>
              );
            })}

          </ul>

        </Modal.Body>

        <Modal.Footer>
          <Button onClick={handleClient}>Finalizar compra</Button>
        </Modal.Footer>
      </Modal>
      <ModalClient show={modalClient} onHide={() => setModalClient(false)} />
    </React.Fragment>
  );
};

export default ModalCart;
