import React from "react";

//import { Container } from "./style";
import Modal from 'react-bootstrap/Modal'
import Button from '../../components/Button';
//import ModalClient from '../ModalClient';



const ModalCart = (props) => {
 // const showHideCart = show ? "display-block" : "display-none";
  //onsole.log(" Eiiii show", showHideCart);

  //const [modalClient, setModalClient] = React.useState(false);
 // const [show, setShow] = useState(false);

 
  // const handleShow = () => {

  //   if(modalClient) {
  //     setModalClient(false);
  //   } 
  //   else { setModalClient(true);
  //   console.log("cad vc scuby-doo")}

  // };

  return (
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
      <h4>Centered Modal</h4>
      <p>
        Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
        dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
        consectetur ac, vestibulum at eros.
      </p>
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
