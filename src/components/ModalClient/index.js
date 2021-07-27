import React, { useState } from "react";
import Modal from 'react-bootstrap/Modal'
import Button from '../../components/Button';
import { Form, InputGroup, Row, Col } from 'react-bootstrap'
import { Formik } from 'formik';
import * as yup from "yup";


const schema = yup.object().shape({
  name: yup.string().required(),
  phone: yup.string().required(),
  email: yup.string().required(),
  city: yup.string().required(),
  state: yup.string().required(),
  zip: yup.string().required(),
});

const ModalClient = (props) => {

  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [zip, setZip] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    const data = { name, phone, email, city, state, zip }
    const clientData = JSON.stringify(data);

    localStorage.setItem(`@client`, clientData);

  };

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
            errors,
          }) => (
            <Form noValidate onSubmit={handleSubmit}>

              <Row className="mb-3">
                <Form.Group as={Col} md="4" controlId="validationFormik01">
                  <Form.Label>Nome</Form.Label>
                  <Form.Control
                    type="text"
                    name="name"
                    onChange={e => setName(e.target.value)}
                    isInvalid={!!errors.name}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.name}
                  </Form.Control.Feedback>
                </Form.Group>

                <Form.Group as={Col} md="4" controlId="validationFormik02">
                  <Form.Label>Telefone</Form.Label>
                  <Form.Control
                    type="text"
                    name="phone"
                    onChange={e => setPhone(e.target.value)}
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
                      aria-describedby="inputGroupPrepend"
                      name="email"
                      onChange={e => setEmail(e.target.value)}
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
                    name="city"
                    onChange={e => setCity(e.target.value)}
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
                    name="state"
                    onChange={e => setState(e.target.value)}
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
                    name="zip"
                    onChange={e => setZip(e.target.value)}
                    isInvalid={!!errors.zip}
                  />

                  <Form.Control.Feedback type="invalid">
                    {errors.zip}
                  </Form.Control.Feedback>
                </Form.Group>
              </Row>
              <div className="d-flex float-right">
                <Button type="submit">Concluir Compra</Button>
              </div>

            </Form>
          )}
        </Formik>

      </Modal.Body>
    </Modal>
  );
}

export default ModalClient;