import React, { useState, useEffect } from "react";
import styles from "./Header.module.css";
import { Link } from "react-scroll";
import { CgClose } from "react-icons/cg";
import { RiMenu2Line } from "react-icons/ri";

export function Header() {
  const [isMobileMenuVisible, setIsMobileMenuVisible] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      // Ocultar o menu móvel ao redimensionar a janela
      setIsMobileMenuVisible(false);
    };

    window.addEventListener("resize", handleResize);

    // Adicionando ou removendo a classe 'hidden' no body com base na largura da janela
    document.body.style.overflow =
      windowWidth < 768 && isMobileMenuVisible ? "hidden" : "auto";

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [isMobileMenuVisible, windowWidth]); // Adicionamos windowWidth às dependências do useEffect

  const toggleMobileMenu = () => {
    setIsMobileMenuVisible(!isMobileMenuVisible);
  };

  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <span className={styles.logo}> &#123; Felipe.dev </span>

        <ul
          className={`${styles.menuDesktop} ${
            isMobileMenuVisible ? styles.hidden : ""
          }`}
        >
          <li>
            <Link
              activeClass="active"
              to="about"
              spy={true}
              smooth={true}
              offset={30}
              duration={500}
            >
              {" "}
              Sobre{" "}
            </Link>
          </li>
          <li>
            <Link
              activeClass="active"
              to="project"
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
            >
              {" "}
              Projeto
            </Link>
          </li>
          <li>
            <Link
              activeClass="active"
              to="contact"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
            >
              Contato
            </Link>
          </li>
        </ul>

        <ul
          id="menuMobile"
          className={`${styles.menuMobile} ${
            isMobileMenuVisible ? "" : styles.hidden
          }`}
        >
          <li>
            <Link
              onClick={toggleMobileMenu}
              to="about"
              spy={true}
              smooth={true}
              offset={100}
              duration={500}
            >
              {" "}
              Sobre{" "}
            </Link>
          </li>
          <li>
            <Link
              onClick={toggleMobileMenu}
              to="project"
              spy={true}
              smooth={true}
              offset={-50}
              duration={500}
            >
              {" "}
              Projeto
            </Link>
          </li>
          <li>
            <Link
              onClick={toggleMobileMenu}
              to="contact"
              spy={true}
              smooth={true}
              offset={200}
              duration={500}
            >
              Contato
            </Link>
          </li>
        </ul>

        <button className={styles.buttonMobile} onClick={toggleMobileMenu}>
          <span>{isMobileMenuVisible ? <CgClose /> : <RiMenu2Line />}</span>
        </button>
      </nav>
    </header>
  );
}
