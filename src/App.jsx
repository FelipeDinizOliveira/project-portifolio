import React from "react";
import { Header } from "./components/header/Header";
import { About } from "./components/about/About";
import { Contact } from "./components/contact/Contact";
import { FaWhatsapp } from "react-icons/fa";
import { Projects } from "./components/projects/projects";
import { Footer } from "./components/footer/Footer";

export function App() {
  return (
    <div className="page">
      <Header />
      <main>
        <About />
        <Projects />
        <Contact />
        <Footer />
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
