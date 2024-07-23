import React from "react";
import styles from "./projects.module.css";
import { getImageUrl } from "../../utils";

export const Projects = () => {
    return (
        <section className={styles.container} id="projects">
            {/* Project 1 */}
            <div className={styles.projectContainer}>
                <div className={styles.contentContainerA}>
                    <div className={styles.sectionTitleBox}>   
                        <h1 className={styles.sectionTitle}> Projects </h1>
                    </div>
                    <div className={styles.jobBoxA}>
                        <h1 className={styles.jobTitle}> MedGet </h1>
                        <h3 className={styles.jobDescription}> Software Developer | January 2024 - May 2024 </h3>
                        <ul>
                        <li className={styles.bulletPoint}> Consultancy project given by NeuroX1, a biotech startup in Austin, TX.</li>
                            <li className={styles.bulletPoint}> Developed a front-end app, used by medical professional to retrieve 
                                                                medical data filtered by a in-house trained LLM.</li>
                            <li className={styles.bulletPoint}> Reduced research time in the company by 40hr/week and got poured 
                                                                around $9000/month into a VM for the project by the company.</li>
                            <li className={styles.bulletPoint}> Leveraged Python, Streamlit, HuggingFace, and OpenAI API. 
                                                                As well as data visualization libraries: Numpy, Pandas, Matplotlib, and Pychart</li>
                        </ul>
                    </div>
                </div>
                <div className={styles.videoContainer}>
                    <video className={styles.video} autoPlay muted loop>
                        <source src={getImageUrl("projects/medget_demo.mp4")} type="video/mp4"  />
                            Your browser does not support the video tag.
                    </video>
                </div>
                <div className={styles.blurOne}/>
            </div>
            {/* Project 2 */}
            <div className={styles.projectContainer}>
                <div className={styles.blurTwo}/>
                <div className={styles.videoContainer}>
                    <video className={styles.video} autoPlay muted loop>
                        <source src={getImageUrl("projects/printerhub_demo.mp4")} type="video/mp4"  />
                            Your browser does not support the video tag.
                    </video>
                </div>
                <div className={styles.contentContainerB}>
                    <div className={styles.jobBoxB}>
                        <h3 className={styles.jobTitle}> 3D Printer Hub </h3>
                        <h1 className={styles.jobDescription}> Software Engineer | July 2024 - August 2024 </h1>
                        <ul>
                            <li className={styles.bulletPoint}> Project developed during my OpenHub SWE internship. 
                                                                Showcasing the demo.</li>
                            <li className={styles.bulletPoint}> The purpose of the project was to cut down time spent going 
                                                                to the printers and to give the head engineer a way to verify 
                                                                every print coming in remotely and efficiently.</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className={styles.blurDivider}></div>
        </section>
    );
}