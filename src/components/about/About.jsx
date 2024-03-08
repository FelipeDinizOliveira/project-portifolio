import styles from "./About.module.css";
import { FaInstagram } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import React, { useState, useEffect } from "react";
export function About() {
  const TypingEffect = () => {
    const [text, setText] = useState("");
    const fullText =
      "I'm a front-end developer. I am on a journey to gain knowledge and practical experience to take my career to the next level."; // Substitua com o texto desejado
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
    <>
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
          <h4> Biography</h4>
          <p>
            Hello, my name is Felipe Diniz, I'm improving my React skills on
            Rocketseat. Digging deeper into the documentation to get that +2
            boost. Excited to take on UI/UX challenges and adopt a flexible
            mindset. 🚀
          </p>
        </div>
        <div className={styles.contactNetwork}>
          <h4> Lets connect</h4>
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
          <h4> Hard Skills</h4>
          <p>
            I develop in JavaScript, React, HTML, and CSS, dedicated to
            providing dynamic, intuitive, and visually appealing user
            experiences. 👨‍💻✨
          </p>
        </div>
        <div className={styles.softSkills}>
          <h4> Soft Skills</h4>
          <p>
            <li>Active Learning</li>
            <li>Critical Thinking</li>
            <li>Emotional Intelligence</li>
            <li>Resilience, Tolerance, and Flexibility</li>
            <li>Time Management</li>
          </p>
        </div>
      </article>
    </>
  );
}
