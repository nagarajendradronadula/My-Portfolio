// import { useRef } from "react";
// import emailjs from "@emailjs/browser";

// function EmailForm() {
//   const form = useRef();

//   const sendEmail = (e) => {
//     e.preventDefault();

//     emailjs
//       .sendForm(
//         "service_vnd2o19", // Replace with your Service ID
//         "template_vr90enp", // Replace with your Template ID
//         form.current,
//         "WK0Y_E7VqGXtZOFUU"   // Replace with your Public Key
//       )
//       .then(
//         (result) => {
//           console.log(result.text);
//           alert("Email sent successfully!");

//         },
//         (error) => {
//           console.log(error.text);
//           alert("Failed to send email. Please try again.");
//         }
//       );
//   };

//   return (
//     <form ref={form} onSubmit={sendEmail}>
//       <label>
//         To:
//         <input type="email" name="to_email" required />
//       </label>
//       <br />
//       <label>
//         Subject:
//         <input type="text" name="subject" required />
//       </label>
//       <br />
//       <label>
//         Message:
//         <textarea name="message" required></textarea>
//       </label>
//       <br />
//       <button type="submit">Send Email</button>
//     </form>
//   );
// }

// export default EmailForm;

import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";

function ContactForm() {
  const form = useRef();
  const [formData, setFormData] = useState({
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
          setFormData({ subject: "", message: "" });
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
      style={{
        border: "2px solid white",
        padding: "1rem",
        borderRadius: "15px",
        marginTop: "1rem",
      }}
    >
      <label>
        Subject:
        <br />
        <input
          type="text"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          style={{
            color: "black",
            width: "100%",
            height: "2rem",
            fontSize: "1.2rem",
            borderRadius: "10px"
          }}
          required
        />
      </label>
      <br />
      <label>
        Message:
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          style={{
            color: "black",
            width: "100%",
            height: "5rem",
            fontSize: "1.2rem",
            borderRadius: "10px"
          }}
          required
        ></textarea>
      </label>
      <br />
      <button type="submit"  style={{border: "2px solid white", padding:"0.5rem", backgroundColor:"rgb(23,29,50)", fontWeight:"bold", borderRadius:"5px", marginTop:"1rem"}}>
        <span>Send Message</span>
      </button>
    </form>
  );
}

export default ContactForm;
