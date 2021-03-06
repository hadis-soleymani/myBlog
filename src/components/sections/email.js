import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
//styles
import styles from "./email.module.css";

//components
import Button from "../shared/button";

//Toast
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Email() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_mmcnb7s",
        "template_52btwp1",
        form.current,
        "zlUHzRA_SthDAYjqG"
      )
      .then(
        (result) => {
          console.log(result.text);
          parent._alert = new parent.Function("alert(arguments[0]);");
          toast("Email send successfully!");
        },
        (error) => {
          console.log(error.text);
        }
      );
    form.current.reset();
  };

  return (
    <div className={styles.email_container} id="email">
      <ToastContainer />
      <h1 data-aos="fade-up">Send me an email</h1>
      <div className={styles.item_container}>
        <div className={styles.paragraph_container}>
          <h2>Lets talk about everything!</h2>
          <p>
            Dont like forms? send me an <span>email</span>
          </p>
        </div>
        <form ref={form}>
          <input placeholder="Your name" type="text" name="name"></input>
          <input placeholder="Email address" type="email" name="email"></input>
          <input placeholder="Subject" type="text" name="subject"></input>
          <textarea placeholder="Message" type="text" name="message"></textarea>
          <Button name="Send Message" onPress_func={sendEmail} />
        </form>
      </div>
    </div>
  );
}
