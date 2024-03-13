import React from "react";
import styles from "./projects.module.css";
import { GrProjects } from "react-icons/gr";

import imgDevlinks from "../../assects/img-devlinks.png";
import imgGitfav from "../../assects/img-gitfav.png";

export function Projects() {
  return (
    <section>
      <h4 className={styles.titleProject}>
        <GrProjects /> Projetos destaques
      </h4>
      <div className={styles.projects}>
        <div className={styles.projectImage}>
          <img src={imgDevlinks} />
        </div>
        <div className={styles.textProject}>
          <h4>Devlinks</h4>
          <p>
            Desenvolvi um linktree usando JavaScript, proporcionando uma
            experiência de navegação interativa. Explore facilmente vários
            recursos, serviços ou redes sociais através deste hub organizado e
            personalizado.
          </p>
          <a href="#" className={styles.raise}>
            Visitar o projeto
          </a>
        </div>
      </div>
      <div className={styles.projects}>
        <div className={styles.projectImage}>
          <img src={imgGitfav} />
        </div>
        <div className={styles.textProject}>
          <h4>GitFav</h4>
          <p>
            Desenvolvi uma aplicação para gerenciar meus favoritos no GitHub,
            utilizando JavaScript. Por meio da API do GitHub, busquei e exibi os
            dados dos usuários, armazenando os favoritos localmente com o
            auxílio do localStorage.
          </p>
          <a href="#" className={styles.raise}>
            Visitar o projeto
          </a>
        </div>
      </div>
    </section>
  );
}
