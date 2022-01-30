import React, { useRef } from "react";
import Button from "./Button";
import emailjs from "emailjs-com";
import Heading from "./Heading";
import "../css/contact.css";
const Contact = ({user, template, service}) => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        service,
        template,
        e.target,
        user
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Your mail has been send. Thank You !!");
        },
        (error) => {
          console.log(error.text);
          alert("Some Error in Server !! Sorry");

        }
      );
  };
  return (
    <>
      <Heading heading={"Contact Me"} />
      <div className="contactBox">
        <form ref={form} onSubmit={sendEmail} autoComplete="off">
          <label>Name : </label>
          <input
            type="text"
            name="name"
            required
            placeholder="Enter your name ..."
          />
          <br />
          <label>Email : </label>
          <input
            type="email"
            name="email"
            required
            placeholder="Enter your email ..."
          />
          <br />
          <label>Phone No. : </label>
          <input
            type="number"
            name="number"
            required
            placeholder="Enter your number ..."
          />
          <br />
          <label>Message : </label> <br />
          <textarea
            name="message"
            rows="10"
            type="text"
            required
            placeholder="Enter your message ..."
          />
          <Button type="submit" text="Submit  &#8594;" />
        </form>
      </div>
    </>
  );
};

export default Contact;
