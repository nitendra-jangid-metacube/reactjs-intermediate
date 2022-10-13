import React from "react";
import ContactForm from "../components/ReplaceRedux/contact-form";
import ContactTable from "../components/ReplaceRedux/contact-table";
import { ContactContextProvider } from "../context/contact-context";

export default function Contacts() {
  return (
    <ContactContextProvider>
      <h3 className="h3 text-center">Contacts</h3>
      <div className="">
        <ContactTable />
        <ContactForm />
      </div>
    </ContactContextProvider>
  );
}