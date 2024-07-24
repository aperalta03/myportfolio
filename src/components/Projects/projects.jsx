import React from "react";
import styles from "./projects.module.css";
import projects from "../../data/projects.json";
import ProjectCard from "./projectCard";

export const Projects = () => {
    return (
        <section className={styles.container} id="projects">
            {projects.map((project, index) => (
                <ProjectCard key={index} project={project} index={index} />
            ))}
            <div className={styles.blurDivider}></div>
        </section>
    );
};
