import React, { useState, useContext } from "react";
import { ContactContext } from "../../context/contact-context";
import Table from 'react-bootstrap/Table';

export default function ContactTable() {
  // Subscribe to `contacts` state and access dispatch function
  const [state, dispatch] = useContext(ContactContext);
  // Declare a local state to be used internally by this component
  const [selectedId, setSelectedId] = useState();

  const delContact = id => {
    dispatch({
      type: "DEL_CONTACT",
      payload: id
    });
  };

  const onRemoveUser = () => {
    delContact(selectedId);
    setSelectedId(null); // Clear selection
  };

  const rows = state.contacts.map(contact => (
    <tr
      className={(contact.id === selectedId)? 'active': ''}
      key={contact.id}
      onClick={() => setSelectedId(contact.id)}
    >
      <td>{contact.id}</td>
      <td>{contact.name}</td>
      <td>{contact.email}</td>
    </tr>
  ));

  return (
    <div className="container">
      <Table bordered hover className="mt-2">
        <thead class="thead-dark">
          <tr>
            <th scope="col">Id</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </Table>
      <button
        className="btn btn-danger my-2"
        disabled={!selectedId}
        onClick={onRemoveUser}
      >
        Remove User
      </button>
    </div>
  );
}