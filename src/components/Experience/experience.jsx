import React from "react";
import styles from "./experience.module.css";
import experiences from "../../data/experiences.json";
import ExperienceCard from "./experienceCard";

export const Experience = () => {
    return (
        <section className={styles.container} id="experience">
            {experiences.map((experience, index) => (
                <ExperienceCard key={index} experience={experience} index={index} />
            ))}
            <div className={styles.blurDivider}></div>
        </section>
    );
};
