// src/components/Nested/Carousel/Carousel.jsx
import React from "react";
import SkillCard from "../Skillcard/skillcard";
import styles from "./carousel.module.css";
import { getImageUrl } from "../../../utils";
import langs from "../../../data/languages.json";
import frames from "../../../data/frameworks.json";

const skills = [...langs, ...frames];

const Carousel = () => {
    return (
        <div className={styles.carouselContainer}>
            <div className={styles.logos}>
                <div className={styles.logosSlide}>
                    {skills.map((skill, id) => (
                        <SkillCard key={id} img={getImageUrl(skill.imageSrc)} title={skill.title} />
                    ))}
                    {skills.map((skill, id) => (
                        <SkillCard key={id + skills.length} img={getImageUrl(skill.imageSrc)} title={skill.title} />
                    ))}
                </div>
                <div className={styles.logosSlide}>
                    {skills.map((skill, id) => (
                        <SkillCard key={id} img={getImageUrl(skill.imageSrc)} title={skill.title} />
                    ))}
                    {skills.map((skill, id) => (
                        <SkillCard key={id + skills.length} img={getImageUrl(skill.imageSrc)} title={skill.title} />
                    ))}
                </div>
            </div>
            <div className={`${styles.gradient} ${styles.gradientLeft}`}></div>
            <div className={`${styles.gradient} ${styles.gradientRight}`}></div>
        </div>
    );
};

export default Carousel;
