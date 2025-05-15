import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import "./email.css";

function ContactForm() {
  const form = useRef();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_vnd2o19", // Replace with your Service ID
        "template_vr90enp", // Replace with your Template ID
        form.current,
        "WK0Y_E7VqGXtZOFUU" // Replace with your Public Key
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Message sent successfully!");
          // Reset form data
          setFormData({ name: "", email: "", subject: "", message: "" });
        },
        (error) => {
          console.log(error.text);
          alert("Failed to send the message. Please try again.");
        }
      );
  };

  return (
    <form
      ref={form}
      onSubmit={sendEmail}
      className="form"
    >
       <label className="label">
        Name:
        <br />
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="input"
          placeholder="Enter your name"
          required
        />
      </label>
      <br />
      <label className="label">
        Email:
        <br />
        <input
          type="text"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="input"
          placeholder="Enter your email"
          required
        />
      </label>
      <br />
       <label className="label">
        Subject:
        <br />
        <input
          type="text"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          className="input"
          placeholder="Enter the subject"
          required
        />
      </label>
      <br />
      <label className="label">
        Message:
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          className="textarea"
          placeholder="Enter your message"
          required
        ></textarea>
      </label>
      <br />
      <button className="button" type="submit">
        Send Message
      </button>
    </form>
  );
}

export default ContactForm;
