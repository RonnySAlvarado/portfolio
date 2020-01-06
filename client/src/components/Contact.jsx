import React, { useState } from "react";
import styled from "styled-components";

import Navigation from "./Navigation";

const Contact = () => {
  const [formInput, setFormInput] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleSubmit = e => {
    e.preventDefault();
    sendFeedback({
      message_html: formInput.message,
      from_name: formInput.name,
      reply_to: formInput.email
    });
    setFormInput({ name: "", email: "", subject: "", message: "" });
  };

  const sendFeedback = message => {
    window.emailjs
      .send("gmail", "template_TAyBFQO0", message)
      .then(res => {
        console.log("Email successfully sent!");
      })
      // Handle errors here however you like, or use a React error boundary
      .catch(err => console.error("Error:", err));
  };

  return (
    <FormPageContainer>
      <Navigation />
      <Form onSubmit={e => handleSubmit(e)}>
        <h3>NAME</h3>
        <Input
          value={formInput.name}
          onChange={e => setFormInput({ ...formInput, name: e.target.value })}
        />
        <h3>EMAIL</h3>
        <Input
          value={formInput.email}
          onChange={e => setFormInput({ ...formInput, email: e.target.value })}
        />
        <h3>SUBJECT</h3>
        <Input
          value={formInput.subject}
          onChange={e =>
            setFormInput({ ...formInput, subject: e.target.value })
          }
        />
        <h3>MESSAGE</h3>
        <TextArea
          value={formInput.message}
          onChange={e =>
            setFormInput({ ...formInput, message: e.target.value })
          }
          cols="83"
          rows="10"
        />
        <Buttons>
          <button>Submit</button>
          <button>Cancel</button>
        </Buttons>
      </Form>
    </FormPageContainer>
  );
};

export default Contact;

const FormPageContainer = styled.div`
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url("/fineas-anton-stock-photo.jpg");
  background-size: 100% 100%;
  background-repeat: no-repeat;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Form = styled.form`
  max-width: 500px;
  width: 100%;
  margin-top: 1%;
  h3 {
    color: white;
  }
  @media (max-width: 500px) {
    width: 80%;
    height: 100vh;
  }
`;

const Input = styled.input`
  width: 100%;
  height: 45px;
  border-radius: 5px;
  border: 1px solid white;
`;

const TextArea = styled.textarea`
  border-radius: 5px;
  border: 1px solid white;
  width: 100%;
`;

const Buttons = styled.div`
  margin-top: 20px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  button {
    width: 46%;
    height: 50px;
    background: black;
    color: white;
    border-radius: 5px;
    border: 1px solid black;
    font-size: 18px;
    &:hover {
      color: gold;
      cursor: pointer;
    }
  }
`;
