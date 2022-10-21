import React, { Component } from "react";
import { useNavigate } from "react-router-dom";
import { Modal, Col, Row, Form, Button } from "react-bootstrap";
import contactAPI from "../api/contactAPI";

const UpdateContactModal = (props) => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const contactData = {
      first_name: e.target.elements["first_name"].value,
      last_name: e.target.elements["last_name"].value,
      address: e.target.elements["address"].value,
      city: e.target.elements["city"].value,
      state: e.target.elements["state"].value,
      zipcode: e.target.elements["zipcode"].value,
      phone: e.target.elements["phone"].value,
      email: e.target.elements["email"].value,
    };

    contactAPI.updateContact(props.contactId, contactData);
    props.setUpdated(true);
    navigate("/contacts-management");
  };

  return (
    <div className="container">
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="container-modal-title-vcenter">
            Update Contact Information
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
                    defaultValue={props.contact.first_name}
                    placeholder=""
                  />
                </Form.Group>
                <Form.Group controlId="last_name">
                  <Form.Label>Last Name</Form.Label>
                  <Form.Control
                    type="text"
                    name="last_name"
                    required
                    defaultValue={props.contact.last_name}
                    placeholder=""
                  />
                </Form.Group>
                <Form.Group controlId="address">
                  <Form.Label>Address</Form.Label>
                  <Form.Control
                    type="text"
                    name="address"
                    required
                    defaultValue={props.contact.address}
                    placeholder=""
                  />
                </Form.Group>
                <Form.Group controlId="city">
                  <Form.Label>City</Form.Label>
                  <Form.Control
                    type="text"
                    name="city"
                    required
                    defaultValue={props.contact.city}
                    placeholder=""
                  />
                </Form.Group>
                <Form.Group controlId="state">
                  <Form.Label>State</Form.Label>
                  <Form.Control
                    type="text"
                    name="state"
                    required
                    defaultValue={props.contact.state}
                    placeholder=""
                  />
                </Form.Group>
                <Form.Group controlId="zipcode">
                  <Form.Label>Zipcode</Form.Label>
                  <Form.Control
                    type="text"
                    name="zipcode"
                    required
                    defaultValue={props.contact.zipcode}
                    placeholder=""
                  />
                </Form.Group>
                <Form.Group controlId="phone">
                  <Form.Label>Phone</Form.Label>
                  <Form.Control
                    type="text"
                    name="phone"
                    required
                    defaultValue={props.contact.phone}
                    placeholder=""
                  />
                </Form.Group>
                <Form.Group controlId="email">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="text"
                    name="email"
                    required
                    defaultValue={props.contact.email}
                    placeholder=""
                  />
                </Form.Group>
                <Form.Group>
                  <Button variant="primary" type="submit">
                    Submit
                  </Button>
                </Form.Group>
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

export default UpdateContactModal;
