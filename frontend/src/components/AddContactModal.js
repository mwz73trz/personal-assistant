import React from "react";
import { useNavigate } from "react-router-dom";
import { Modal, Col, Row, Form, Button } from "react-bootstrap";
import contactAPI from "../api/contactAPI";

const AddContactModal = (props) => {
  const navigate = useNavigate();

  const handleSubmit = async (evt) => {
    evt.preventDefault();

    const contactData = {
      first_name: evt.target.elements["first_name"].value,
      last_name: evt.target.elements["last_name"].value,
      address: evt.target.elements["address"].value,
      city: evt.target.elements["city"].value,
      state: evt.target.elements["state"].value,
      zipcode: evt.target.elements["zipcode"].value,
      phone: evt.target.elements["phone"].value,
      email: evt.target.elements["email"].value,
    };

    const data = await contactAPI.addContact(contactData);
    if (data) {
      navigate("/contacts-management");
    }
  };

  return (
    <div className="container">
      <Modal
        {...props}
        size="lg"
        aria-labelledby="container-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="container-modal-title-vcenter">
            Fill In Contact Information
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Row>
            <Col sm={6}>
              <Form onSubmit={handleSubmit}>
                <Form.Group controlId="first_name">
                  <Form.Label>First Name</Form.Label>
                  <Form.Control
                    type="text"
                    name="first_name"
                    required
                    placeholder=""
                  />
                </Form.Group>
                <Form.Group controlId="last_name">
                  <Form.Label>Last Name</Form.Label>
                  <Form.Control
                    type="text"
                    name="last_name"
                    required
                    placeholder=""
                  />
                </Form.Group>
                <Form.Group controlId="address">
                  <Form.Label>Address</Form.Label>
                  <Form.Control
                    type="text"
                    name="address"
                    required
                    placeholder=""
                  />
                </Form.Group>
                <Form.Group controlId="city">
                  <Form.Label>City</Form.Label>
                  <Form.Control
                    type="text"
                    name="city"
                    required
                    placeholder=""
                  />
                </Form.Group>
                <Form.Group controlId="state">
                  <Form.Label>State</Form.Label>
                  <Form.Control
                    type="text"
                    name="state"
                    required
                    placeholder=""
                  />
                </Form.Group>
                <Form.Group controlId="zipcode">
                  <Form.Label>Zipcode</Form.Label>
                  <Form.Control
                    type="text"
                    name="zipcode"
                    required
                    placeholder=""
                  />
                </Form.Group>
                <Form.Group controlId="phone">
                  <Form.Label>Phone</Form.Label>
                  <Form.Control
                    type="text"
                    name="phone"
                    required
                    placeholder=""
                  />
                </Form.Group>
                <Form.Group controlId="email">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="text"
                    name="email"
                    required
                    placeholder=""
                  />
                </Form.Group>
                <p></p>
                <Button variant="primary" type="submit">
                  Submit
                </Button>
              </Form>
            </Col>
          </Row>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" type="submit" onClick={props.onHide}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default AddContactModal;
