import React from "react";
import styles from "./projects.module.css";
import { GrProjects } from "react-icons/gr";

import imgDevlinks from "../../assects/img-devlinks.png";
import imgGitfav from "../../assects/img-gitfav.png";

export function Projects() {
  return (
    <section>
      <h4>
        <GrProjects /> Featured Projects
      </h4>
      <div className={styles.projects}>
        <div className={styles.projectImage}>
          <img src={imgDevlinks} />
        </div>
        <div className={styles.textProject}>
          <h4>Devlinks</h4>
          <p>
            I created a dynamic link tree using JavaScript, providing an
            interactive browsing experience. Easily explore various resources,
            services, or social networks through this organized and customized
            hub
          </p>
          <a href="#" className={styles.raise}>
            Visit project
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
            I crafted an application to manage my GitHub favorites using
            JavaScript. Leveraging the GitHub API, I fetched and displayed user
            data. Favorites are stored locally using localStorage.
          </p>
          <a href="#" className={styles.raise}>
            Visit project
          </a>
        </div>
      </div>
    </section>
  );
}
