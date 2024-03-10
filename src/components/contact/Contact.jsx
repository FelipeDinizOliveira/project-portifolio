import { useState } from "react";
import styles from "./Contact.module.css";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";
import imgContact from "../../assects/img-contact.png";
import imgContact2 from "../../assects/img-contact2.png";

export function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  function sendEmail(e) {
    e.preventDefault();
    if (name == "" || email === "" || message === "") {
      const Toast = Swal.mixin({
        toast: true,
        position: "top",
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.onmouseenter = Swal.stopTimer;
          toast.onmouseleave = Swal.resumeTimer;
        },
      });
      Toast.fire({
        icon: "error",
        title: "Error, fill in the fields correctly",
      });
      return;
    }
    const templateParams = {
      from_name: name,
      message: message,
      email: email,
    };

    emailjs
      .send(
        "service_4rtq8km",
        "template_dtvvggb",
        templateParams,
        "_pRKAzDpckMaKqDeJ"
      )
      .then(
        (response) => {
          const Toast = Swal.mixin({
            toast: true,
            position: "top",
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
            didOpen: (toast) => {
              toast.onmouseenter = Swal.stopTimer;
              toast.onmouseleave = Swal.resumeTimer;
            },
          });
          Toast.fire({
            icon: "success",
            title: "Your email has been sent successfully",
          });

          console.log("email successfully, response.status, response.text");
          setName("");
          setEmail("");
          setMessage("");
        },
        (err) => {
          console.log("Error: ", err);
        }
      );
  }
  return (
    <section className={styles.contact}>
      <div className={styles.textContact}>
        <h4>Contact me </h4>
        <p>
          Thank you for reaching out! I'll get back to you as soon as possible.
          In the meantime, feel free to let me know how I can assist you.
          Looking forward to connecting with you!
        </p>
        <form className={styles.form} onSubmit={sendEmail}>
          <input
            className={styles.input}
            type="text"
            placeholder="Type your name"
            onChange={(e) => setName(e.target.value)}
            value={name}
          ></input>
          <input
            className={styles.input}
            type="email"
            placeholder="Type your email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          ></input>
          <input
            className={styles.textarea}
            type="text"
            placeholder="Type your message"
            onChange={(e) => setMessage(e.target.value)}
            value={message}
          ></input>
          <button className={`${styles.custombtn} ${styles.btn15}`}>
            SendMessage
          </button>
        </form>
      </div>
      <div className={styles.imgContact}>
        <img src={imgContact2} />
      </div>
    </section>
  );
}
