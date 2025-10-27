import React, { useState } from "react";
import "./styles.css";

function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [NameError, setNameError] = useState("");
  const [EmailError, setEmailError] = useState("");
  const [MessageError, setMessageError] = useState("");
  const [result, setResult] = useState("");
  const [validEmail, setValidEmailError] = useState("");

  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const submitForm = (e) => {
    e.preventDefault();
    const Name = name.trim();
    const Email = email.trim();
    const Message = message.trim();
    console.log("message", message);

    if (!Name && !Email && !Message) {
      setMessageError("Name,Email,Message are the required fields");
    }

    if (Name === "") {
      setNameError("Name is required for the name field");
    }
    if (Email === "") {
      setEmailError("Email is required for the email field");
    } else if (!validateEmail(email)) {
      setValidEmailError("Invalid Email Format!");
    }
    if (Message === "") {
      setMessageError("Message is required for the message field");
    }
    if (Name && Email && Message && validateEmail(Email)) {
      setResult(`Thank You, ${name}`);
      setName("");
      setEmail("");
      setMessage("");
    }
  };

  return (
    <div>
      <h1>Contact Us</h1>
      <form onSubmit={submitForm}>
        <label htmlFor="name" l>
          Name
        </label>
        <input
          type="text"
          name="name"
          value={name}
          id="name"
          onChange={(e) => setName(e.target.value)}
        />
        {NameError && <p className="error">{NameError}</p>}

        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          value={email}
          id="email"
          onChange={(e) => setEmail(e.target.value)}
        />
        {EmailError && <p className="error">{EmailError}</p>}
        {validEmail && <p className="error">{validEmail}</p>}

        <label htmlFor="message">Message</label>
        <textarea
          name="message"
          value={message}
          id="message"
          onChange={(e) => setMessage(e.target.value)}
        />
        {MessageError && <p className="error">{MessageError}</p>}

        <button type="submit">Submit</button>
      </form>
      {result && <p>{result}</p>}
    </div>
  );
}

export default ContactForm;
