import React from "react";
import { Header } from "./components/header/Header";
import { About } from "./components/about/About";
import { FaWhatsapp } from "react-icons/fa";

export function App() {
  return (
    <div className="page">
      <Header />
      <main>
        <About />
      </main>

      <a href="">
        <FaWhatsapp
          className="iconWhatssap"
          target="_blank"
          title="Enviar mensagem via WhatsApp"
        />
      </a>
    </div>
  );
}
