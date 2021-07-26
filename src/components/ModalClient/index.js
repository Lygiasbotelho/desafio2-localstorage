import React, { useState, useEffect } from "react";

//import { Container } from "./style";
import Modal from 'react-bootstrap/Modal'
import Button from '../../components/Button';
import {Form, InputGroup, Row, Col} from 'react-bootstrap'

// import {Form, FormControl, FloatingLabel, Row, Col} from 'react-bootstrap'
import { Formik } from 'formik';
import * as yup from "yup";
 //const { Formik } = formik;



const schema = yup.object().shape({
  name: yup.string().required('Preencha seu nome'),
  phone: yup.string().required('Preencha o telefone'),
  email: yup.string().required('Preencha o email'),
  city: yup.string().required('Preencha a cidade'),
  state: yup.string().required('Preencha o estado'),
  zip: yup.string().required('Preencha o cep'),
});

const ModalClient= (props) => {

 // const [data, setData] = useState([]);
  const [client, setClient] = useState([]);
  //const [modalShow, setModalShow] = React.useState(false);
  

  const addClient = (i) => {
    //const formCliente = formClient;
  
    setClient([...client, client]);
    
    const clientData = JSON.stringify(client);
      
    localStorage.setItem(`@client`, clientData);
  
    console.log("Eii", client);
  //  console.log(this.formClient)
  
  }

  // useEffect(() => {
  //   api.get("").then((response) => {
  //     setData(response.data);
  //   });
  // }, []);
  const handleChange = () => {
    setClient(props.state.value);
  }
//   const handleSubmit = (event) => {
//     console.log(event.target.elements.formClient.value)
// }
  console.log(" Eii props ModalClient", props);
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      show={props.show}
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Estamos quase lá...
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h5>Preencha seus dados para concluir a compra</h5>
        <Formik
      validationSchema={schema}
      onSubmit={console.log}
      initialValues={{
        name: '',
        phone: '',
        email: '',
        city: '',
        state: '',
        zip: '',
      }}
    >
      {({
        handleSubmit,
        handleChange,
        handleBlur,
        values,
        touched,
        isValid,
        errors,
      }) => (
        <Form noValidate onSubmit={handleSubmit} controlId="formClient">
           {/* onSubmit={(e) => this.handleSubmit(e)} */}
          <Row className="mb-3">
            <Form.Group as={Col} md="4" controlId="validationFormik01">
              <Form.Label>Nome</Form.Label>
              <Form.Control
                required
                type="text"
                name="name"
                value={values.name}
                onChange={handleChange}
              //  onChange={ e => setClient('name', e.target.value)}
                isInvalid={!!errors.name}
              />
             <Form.Control.Feedback type="invalid">
                {errors.name}
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationFormik02">
              <Form.Label>Telefone</Form.Label>
              <Form.Control
                required
                type="text"
                name="phone"
                value={values.phone}
                onChange={handleChange}
               // onChange={ e => setClient('phone', e.target.value)}
                isInvalid={!!errors.phone}
              />
                <Form.Control.Feedback type="invalid">
                {errors.phone}
              </Form.Control.Feedback>

            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationFormikUsername">
              <Form.Label>Email</Form.Label>
              <InputGroup hasValidation>
                <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
                <Form.Control
                  type="email"
                  placeholder="Email"
                  aria-describedby="inputGroupPrepend"
                  name="email"
                  value={values.email}
                 onChange={handleChange}
                //onChange={ e => setClient('email', e.target.value)}

                  isInvalid={!!errors.email}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.email}
                </Form.Control.Feedback>
              </InputGroup>
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group as={Col} md="6" controlId="validationFormik03">
              <Form.Label>Cidade</Form.Label>
              <Form.Control
                type="text"
                placeholder="Cidade"
                name="city"
                value={values.city}
                onChange={handleChange}
             // onChange={ e => setClient('city', e.target.value)}

                isInvalid={!!errors.city}
              />

              <Form.Control.Feedback type="invalid">
                {errors.city}
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="3" controlId="validationFormik04">
              <Form.Label>Estado</Form.Label>
              <Form.Control
                type="text"
                placeholder="Estado"
                name="state"
                value={values.state}
                onChange={handleChange}
              // onChange={ e => setClient('state', e.target.value)}

                isInvalid={!!errors.state}
              />
              <Form.Control.Feedback type="invalid">
                {errors.state}
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="3" controlId="validationFormik05">
              <Form.Label>CEP</Form.Label>
              <Form.Control
                type="text"
                placeholder="Cep"
                name="zip"
                value={values.zip}
                onChange={handleChange}
              // onChange={ e => setClient('zip', e.target.value)}

                isInvalid={!!errors.zip}
              />

              <Form.Control.Feedback type="invalid">
                {errors.zip}
              </Form.Control.Feedback>
            </Form.Group>
          </Row>
          <div className="d-flex float-right"> 
          <Button type="submit" onSubmit={(() => this.addClient())}>Concluir Compra</Button>
</div>
         
        </Form>
      )}
    </Formik>
    
      </Modal.Body>
    </Modal>
  );
}

export default ModalClient;