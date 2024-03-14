import styles from "./About.module.css";
import { FaInstagram } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import React, { useState, useEffect } from "react";
export function About() {
  const TypingEffect = () => {
    const [text, setText] = useState("");
    const fullText =
      "Buscando aprimorar minhas habilidades como dev front-end, estou empenhado em adquirir conhecimento e experiência para elevar minha carreira para o proximo nível.";
    const typingSpeed = 50; // Velocidade de digitação em milissegundos

    useEffect(() => {
      let currentIndex = 0;

      const intervalId = setInterval(() => {
        if (currentIndex <= fullText.length) {
          setText(fullText.slice(0, currentIndex));
          currentIndex++;
        } else {
          clearInterval(intervalId);
        }
      }, typingSpeed);

      return () => {
        clearInterval(intervalId);
      };
    }, [fullText]);

    return (
      <div>
        <h2>{text}</h2>
      </div>
    );
  };
  return (
    <section className={styles.wAbout} id="about">
      <div className={styles.initialDescription}>
        <h2 className={styles.textEffect}>
          <TypingEffect />
        </h2>
      </div>
      <article className={styles.about}>
        <div className={styles.avatar}>
          <img
            src="https://github.com/felipedinizoliveira.png"
            alt="photo by Felipe Diniz"
          />
        </div>
        <div className={styles.author}>
          <h4> Biografia </h4>
          <p>
            Olá, meu nome é Felipe Diniz e estou aprimorando minhas habilidades
            em React na Rocketseat. Estou mergulhando mais fundo na documentação
            para obter aquele impulso extra. Estou empolgado para enfrentar
            desafios de UI/UX e adotar uma mentalidade flexível. 🚀
          </p>
        </div>
        <div className={styles.contactNetwork}>
          <h4> Vamos conectar</h4>
          <span>
            <a
              href="https://www.instagram.com/felipedniz_oliveira/"
              target="_blank"
              title="Instagram de Felipe Diniz"
            >
              <FaInstagram />
            </a>
            <a
              href="https://www.linkedin.com/in/felipe-diniz-oliveira/"
              target="_blank"
              title="Linkdin de Felipe Diniz"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://github.com/FelipeDinizOliveira/"
              target="_blank"
              title="Github de Felipe Diniz"
            >
              <FaGithub />
            </a>
          </span>
        </div>
      </article>
      <article className={styles.skills}>
        <div className={styles.hardSkills}>
          <h4> Habilidades técnicas </h4>
          <p>
            Eu desenvolvo em JavaScript, React, HTML e CSS, dedicado a fornecer
            experiências de usuário dinâmicas, intuitivas e visualmente
            atraentes. 👨‍💻✨
          </p>
        </div>
        <div className={styles.softSkills}>
          <h4> Habilidades interpessoais</h4>
          <p>
            <li>Aprendizado Ativo</li>
            <li>Pensamento Crítico</li>
            <li>Inteligência Emocional</li>
            <li>Resiliência, Tolerância e Flexibilidade</li>
            <li>Gerenciamento do Tempo</li>
          </p>
        </div>
      </article>
    </section>
  );
}
