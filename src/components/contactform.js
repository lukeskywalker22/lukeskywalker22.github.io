import React from "react";
import "./formstyles.css";
import emailjs from "@emailjs/browser";

const SERVICE_ID = "service_z7dwxcw";
const TEMPLATE_ID = "template_0j0bmxa";
const PUBLIC_KEY = "x-edYkE42EIUznJhs";

const ContactForm = () => {
  const handleOnSubmit = (e) => {
    e.preventDefault();
    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, PUBLIC_KEY).then(
      (result) => {
        alert("Message sent successfully!");
      },
      (error) => {
        console.log(error.text);
        alert("Oops! Message sent unsuccessfully.");
      }
    );
    e.target.reset();
  };

  return (
    <div style={{ display: "flex" }}>
      <form class="formContainer" onSubmit={handleOnSubmit}>
        <h2>Send me a message, let's chat!</h2>
        <div class="formElement">
          <label for="from_name">Name</label>
          <input
            type="text"
            id="from_name"
            name="from_name"
            placeholder="Your name"
            required
          />
        </div>

        <div class="formElement">
          <label>Email</label>
          <input
            type="text"
            id="from_email"
            name="from_email"
            placeholder="Your email address"
            required
          />
        </div>

        <div class="formElement">
          <label for="message">Name</label>
          <textarea
            name="message"
            rows={5}
            cols={30}
            placeholder="What would you like to say?"
            required
          />
        </div>
        <br />

        <button type="submit" className="formButton">
          Submit
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
