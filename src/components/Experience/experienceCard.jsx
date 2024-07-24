import React from "react";
import styles from "./experienceCard.module.css";
import { getImageUrl } from "../../utils";

const ExperienceCard = ({ experience, index }) => {
    const isOdd = index % 2 === 0;

    return (
        <div className={styles.experienceContainer}>
            {isOdd ? (
                <>
                    <div className={styles.contentContainerA}>
                        {index === 0 && (
                            <div className={styles.sectionTitleBox}>
                                <h1 className={styles.sectionTitle}>Experience</h1>
                            </div>
                        )}
                        <div className={styles.jobBoxA}>
                            <h1 className={styles.jobTitle}>{experience.title}</h1>
                            <h3 className={styles.jobDescription}>{experience.subtitle}</h3>
                            <ul>
                                {experience.bulletPoints.map((point, i) => (
                                    <li key={i} className={styles.bulletPoint}>{point}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    <div className={styles.logoContainerA} style={{ backgroundImage: `url(${getImageUrl(experience.background)})` }}>
                        <img className={styles.logoA} src={getImageUrl(experience.logo)} alt="Alonso Peralta" />
                    </div>
                </>
            ) : (
                <>
                    <div className={styles.logoContainerB} style={{ backgroundImage: `url(${getImageUrl(experience.background)})` }}>
                        <img className={styles.logoB} src={getImageUrl(experience.logo)} alt="Alonso Peralta" />
                    </div>
                    <div className={styles.contentContainerB}>
                        <div className={styles.jobBoxB}>
                            <h1 className={styles.jobTitle}>{experience.title}</h1>
                            <h3 className={styles.jobDescription}>{experience.subtitle}</h3>
                            <ul>
                                {experience.bulletPoints.map((point, i) => (
                                    <li key={i} className={styles.bulletPoint}>{point}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </>
            )}
            <div className={isOdd ? styles.blurOne : styles.blurTwo} />
        </div>
    );
};

export default ExperienceCard;
