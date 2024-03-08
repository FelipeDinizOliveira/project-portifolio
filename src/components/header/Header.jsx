import styled from "styled-components";
import React from "react";
import styles from "./Header.module.css";

export function Header() {
  return (
    <header>
      <div className={styles.header}>
        <div className={styles.logo}>
          <span> &#123; Felipe.dev </span>
        </div>
        <nav className={styles.route}>
          <a href="#"> About-me</a>
          <a href="#"> Projects</a>
          <a href="#"> Soft skills</a>
          <a href="#"> Contact-me</a>
          <a href="#"> Blog</a>
        </nav>
      </div>
    </header>
  );
}
