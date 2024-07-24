import React from "react";
import { getImageUrl } from "../../utils";
import styles from "./experience.module.css";

export const Experience = () => {

    return (
        <section className={styles.container} id="experience">
            {/* Experiences */}
                {/* Experience 1 */}
            <div className={styles.experienceContainer}>
                <div className={styles.contentContainerA}>
                    <div className={styles.sectionTitleBox}>   
                        <h1 className={styles.sectionTitle}> Experience </h1>
                    </div>
                    <div className={styles.jobBoxA}>
                        <h1 className={styles.jobTitle}> Openhub </h1>
                        <h3 className={styles.jobDescription}> Software Engineering Intern | June 2024 - Present @ Belgium </h3>
                        <ul>
                            <li className={styles.bulletPoint}> Developed a full-stack app, used by a engineers to manage a printer farm. Allowed 7 printers to be used at once, remotely.</li>
                            <li className={styles.bulletPoint}> Meant to be used by dozens of employees.</li>
                            <li className={styles.bulletPoint}> Leveraged React, Javascript, Python, and Firebase and libraries and APIs like: Flask, Prusalink API, requests, and GoogleAuth.</li>
                        </ul>
                    </div>
                </div>
                <div className={styles.logoContainerA}>
                    <img className={styles.logoA} src={getImageUrl("history/openhub2.png")} alt="OpenHub Logo" />
                </div>
                <div className={styles.blurOne}/>
            </div>
                {/* Experience 2 */}
            <div className={styles.experienceContainer}>
                <div className={styles.blurTwo}/>
                <div className={styles.logoContainerB}>
                    <img className={styles.logoB} src={getImageUrl("history/headstarter.png")} alt="HeadStarter Logo" />
                </div>
                <div className={styles.contentContainerB}>
                    <div className={styles.jobBoxB}>
                        <h3 className={styles.jobTitle}> Headstarter.ai </h3>
                        <h1 className={styles.jobDescription}> Software Engineering Fellow | July 2024 - Present @ Remote </h1>
                        <ul>
                            <li className={styles.bulletPoint}> Shadowed software and business professionals in Big Tech and around the world.</li>
                            <li className={styles.bulletPoint}> Developed AI-powered projects that allowed me to learn concepts like: OpenAI API, RAG, StripeAPI, Next.js, AWS, DNS, React.js, Python, and Firebase</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className={styles.blurDivider}></div>
            {/* Experiences */}
        </section>
    );
};
