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
        title: "Erro, preencha os campos corretamente",
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
            title: "Seu e-mail foi enviado com sucesso!",
          });

          console.log("port 200, response.status, response.text");
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
    <section id="contact" className={styles.contact}>
      <div className={styles.textContact}>
        <h4>Contato </h4>
        <p>
          Obrigado por entrar em contato! Entrarei em contato com você o mais
          breve possível. Enquanto isso, fique à vontade para me informar como
          posso ajudá-lo. Estou ansioso para conectar-me com você em breve!
        </p>
        <form className={styles.form} onSubmit={sendEmail}>
          <input
            className={styles.input}
            type="text"
            placeholder="Digite seu nome"
            onChange={(e) => setName(e.target.value)}
            value={name}
          ></input>
          <input
            className={styles.input}
            type="email"
            placeholder="Digite seu email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          ></input>
          <input
            className={styles.textarea}
            type="text"
            placeholder="Digite sua mensagem"
            onChange={(e) => setMessage(e.target.value)}
            value={message}
          ></input>
          <button className={`${styles.custombtn} ${styles.btn15}`}>
            Enviar Mensagem
          </button>
        </form>
      </div>
      <div className={styles.imgContact}>
        <img src={imgContact2} />
      </div>
    </section>
  );
}
