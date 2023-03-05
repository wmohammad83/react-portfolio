import React from "react";
import ContactForm from "../components/ContactForm/ContactForm";

function Contact() {
  return (
    <>
      <div className="container">
        <h1>Contact</h1>
        <div className="row">
          <div className="col-sm-12 col-md-6 mt-4">
            <h4>Want to get into contact?</h4>
            <p>
              Please see my details below or you can fill out the form on the
              right.
            </p>
            <ul>
              <li>wmohammad@icloud.com</li>
            </ul>
          </div>
          <div className="col-sm-12 col-md-6">
            <ContactForm />
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
