import React, { useState, useContext } from "react";
import _ from "lodash";
import { ContactContext } from "../../context/contact-context";

export default function ContactForm() {
  const name = useFormInput("");
  const email = useFormInput("");
  // eslint-disable-next-line no-unused-vars
  const [state, dispatch] = useContext(ContactContext);

  const onSubmit = (e) => {
    e.preventDefault()
    dispatch({
      type: "ADD_CONTACT",
      payload: { id: _.uniqueId(10), name: name.value, email: email.value }
    });
    // Reset Form
    name.onReset();
    email.onReset();
  };

  return (
      <form className="mt-3" onSubmit={onSubmit}>
        <div className="form-group">
          <label htmlFor="exampleInputName">Name</label>
          <input type="text" class="form-control" id="exampleInputName" placeholder="Enter name" {...name} required />
        </div>

        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Email address</label>
          <input type="email" class="form-control" id="exampleInputEmail1" placeholder="Enter email" {...email} required />
        </div>

        <button type="submit" class="btn btn-primary mt-2">New Contact</button>
      </form>
  );
}

function useFormInput(initialValue) {
  const [value, setValue] = useState(initialValue);

  const handleChange = e => {
    setValue(e.target.value);
  };

  const handleReset = () => {
    setValue("");
  };

  return {
    value,
    onChange: handleChange,
    onReset: handleReset
  };
}