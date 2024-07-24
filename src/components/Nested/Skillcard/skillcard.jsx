// src/components/Nested/SkillCard/SkillCard.jsx
import React from "react";
import styles from "./skillcard.module.css"; // Create this CSS file for skill card styles

const SkillCard = ({ img, title }) => {
    return (
        <div className={styles.skill}>
            <div className={styles.skillImageContainer}>
                <img src={img} alt="Alonso Peralta" />
            </div>
            <p>{title}</p>
        </div>
    );
};

export default SkillCard;
