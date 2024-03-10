import React, { useState, useEffect } from "react";
import styles from "./Header.module.css";
import { RiMenu2Line } from "react-icons/ri";

export function Header() {
  const [isMobileMenuVisible, setIsMobileMenuVisible] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      setIsMobileMenuVisible(false); // Resetar o estado do menu ao redimensionar
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
    <header>
      <nav className={styles.nav}>
        <span className={styles.logo}> &#123; Felipe.dev </span>

        <ul
          className={`${styles.menuDesktop} ${
            isMobileMenuVisible ? styles.hidden : ""
          }`}
        >
          <li>
            <a href="#"> About</a>
          </li>
          <li>
            <a href="#"> Projects</a>
          </li>
          <li>
            <a href="#"> Contact</a>
          </li>
        </ul>

        <ul
          className={`${styles.menuMobile} ${
            isMobileMenuVisible ? "" : styles.hidden
          }`}
        >
          <li>
            <a href="#"> About</a>
          </li>
          <li>
            <a href="#"> Projects</a>
          </li>
          <li>
            <a href="#"> Contact</a>
          </li>
        </ul>
        <button className={styles.buttonMobile} onClick={toggleMobileMenu}>
          <span>
            <RiMenu2Line />
          </span>
        </button>
      </nav>
    </header>
  );
}
