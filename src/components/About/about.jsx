import React from "react";
import styles from "./about.module.css";
import { getImageUrl } from "../../utils";
import Slideshow from "../Nested/Slideshow/slideshow";
import Carousel from "../Nested/Carousel/carousel";
import socials from "../../data/socials.json";
import slideshowImages from "../../data/slideshowimages.json"; 

const About = () => {
    return (
        <section className={styles.container} id="about">
            <h2 className={styles.title}>
                About
            </h2>
            <div className={styles.content}>
                <div className={styles.textContainer}>
                    <div className={styles.aboutBox}>
                        <p className={styles.aboutText}>
                            I am an undergraduate student at Texas A&M University pursuing a
                            Bachelor of Science in Computer Science and Engineering.
                        </p>
                        <p className={styles.aboutText}>
                            I am passionate about traveling and new tech: software engineering, quantum computing, ML/AI, and VR.
                        </p>
                    </div>
                    <div className={styles.socialContainer}>
                        {socials.map((social, index) => (
                            <a key={index} className={styles.social} href={social.url}>
                                <div className={styles.socialBox}>
                                    <img 
                                        className={styles.socialImg}
                                        src={getImageUrl(social.img)}
                                        alt="Alonso Peralta"
                                    />
                                    <div className={styles.social}>
                                        <h1>{social.handle}</h1>
                                    </div>
                                </div>
                            </a>
                        ))}
                    </div>
                </div>
                <div className={styles.pictureContainer}>
                    <Slideshow images={slideshowImages} interval={10000} />
                </div>
                <Carousel />
            </div>
            <div className={styles.blurOne}/>
        </section>
    );
};

export { About };