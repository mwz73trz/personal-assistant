import React, { useEffect, useState } from "react";
import { Tab, Table } from "react-bootstrap";
import { Button, ButtonToolbar } from "react-bootstrap";
import { FaEdit } from "react-icons/fa";
import { RiDeleteBin5Line } from "react-icons/ri";
import contactAPI from "../api/contactAPI";
import AddContactModal from "../components/AddContactModal";
import UpdateContactModal from "../components/UpdateContactModal";

const ManageContacts = () => {
  const [contacts, setContacts] = useState([]);
  const [addModalShow, setAddModalShow] = useState(false);
  const [editModalShow, setEditModalShow] = useState(false);
  const [editContact, setEditContact] = useState([]);
  const [isUpdated, setIsUpdated] = useState(false);

  const handleUpdate = (e, contact) => {
    e.preventDefault();
    setEditModalShow(true);
    setEditContact(contact);
  };

  const handleAdd = (e) => {
    e.preventDefault();
    setAddModalShow(true);
  };

  const handleDelete = (e, contactId) => {
    if (window.confirm("Are you sure?")) {
      e.preventDefault();
      contactAPI.deleteContact(contactId);
      setIsUpdated(true);
    }
  };

  useEffect(() => {
    let mounted = true;
    if (contacts.length && !isUpdated) {
      return;
    }

    contactAPI.getContacts().then((data) => {
      if (mounted) {
        setContacts(data);
      }
    });
    return () => {
      mounted = false;
      setIsUpdated(false);
    };
  }, [isUpdated, contacts]);

  let AddModelClose = () => setAddModalShow(false);
  let EditModelClose = () => setEditModalShow(false);

  return (
    <div className="container-fluid side-container">
      <div className="row side-row">
        <p id="manage"></p>
        <Table
          striped
          bordered
          hover
          className="react-bootstrap-table"
          id="dataTable"
        >
          <thead>
            <tr>
              <th>ID</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Address</th>
              <th>City</th>
              <th>State</th>
              <th>Zipcode</th>
              <th>Phone</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            {contacts.map((contact) => (
              <tr key={contact.id}>
                <td>{contact.id}</td>
                <td>{contact.first_name}</td>
                <td>{contact.last_name}</td>
                <td>{contact.address}</td>
                <td>{contact.city}</td>
                <td>{contact.state}</td>
                <td>{contact.zipcode}</td>
                <td>{contact.phone}</td>
                <td>{contact.email}</td>
                <td>
                  <Button
                    className="mr-2"
                    variant="danger"
                    onClick={(event) => handleDelete(event, contact.id)}
                  >
                    <RiDeleteBin5Line />
                  </Button>
                  <span>&nbsp;&nbsp;&nbsp;</span>
                  <Button
                    className="mr-2"
                    onClick={(event) => handleUpdate(event, contact)}
                  >
                    <FaEdit />
                  </Button>
                  <UpdateContactModal
                    show={editModalShow}
                    contact={editContact}
                    setUpdated={setIsUpdated}
                    onHide={EditModelClose}
                  ></UpdateContactModal>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
        <ButtonToolbar>
          <Button variant="primary" onClick={handleAdd}>
            Add Contact
          </Button>
          <AddContactModal
            show={addModalShow}
            setUpdated={setIsUpdated}
            onHide={AddModelClose}
          ></AddContactModal>
        </ButtonToolbar>
      </div>
    </div>
  );
};

export default ManageContacts;
