import React from "react";
import styles from "./projectCard.module.css";
import { getImageUrl } from "../../utils";

const ProjectCard = ({ project, index }) => {
    const isOdd = index % 2 === 0;

    return (
        <div className={`${styles.projectContainer} ${index === 0 ? styles.firstContainer : ""}`}>
            {isOdd ? (
                <>
                    <div className={styles.contentContainerA}>
                        {index === 0 && (
                            <div className={styles.sectionTitleBox}>
                                <h1 className={styles.sectionTitle}>Projects</h1>
                            </div>
                        )}
                        <div className={styles.jobBoxA}>
                            <h1 className={styles.jobTitle}>{project.title}</h1>
                            <h3 className={styles.jobDescription}>{project.subtitle}</h3>
                            <ul>
                                {project.bulletPoints.map((point, i) => (
                                    <li key={i} className={styles.bulletPoint}>{point}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    <div className={`${styles.videoContainer} ${index === 0 ? styles.firstVideoContainer : ""}`}>
                        <video className={styles.video} autoPlay muted loop>
                            <source src={getImageUrl(project.videoSrc)} type="video/mp4" alt="Alonso Peralta"/>
                                Your browser does not support the video tag.
                        </video>
                    </div>
                    <div className={styles.blurOne} />
                </>
            ) : (
                <>
                    <div className={styles.videoContainer}>
                        <video className={styles.video} autoPlay muted loop>
                            <source src={getImageUrl(project.videoSrc)} type="video/mp4" alt="Alonso Peralta"/>
                                Your browser does not support the video tag.
                        </video>
                    </div>
                    <div className={styles.contentContainerB}>
                        <div className={styles.jobBoxB}>
                            <h1 className={styles.jobTitle}>{project.title}</h1>
                            <h3 className={styles.jobDescription}>{project.subtitle}</h3>
                            <ul>
                                {project.bulletPoints.map((point, i) => (
                                    <li key={i} className={styles.bulletPoint}>{point}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    <div className={styles.blurTwo} />
                </>
            )}
        </div>
    );
};

export default ProjectCard;
