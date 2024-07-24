import React , { useState } from "react";
import styles from "./navbar.module.css"
import TypeWriter from 'typewriter-effect';
import HamburgerMenu from "../Nested/Hamburger/hamburgermenu";

export const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    return (
        <section className={styles.container}>
            <div className={styles.content}>
                <div className={styles.blurredContainer}>
                    <h1 className={styles.title}>
                        Hi, I'm Alonso Peralta
                    </h1>
                    <div className={styles.description}>
                        <TypeWriter
                            options={{
                                strings: ["Texas A&M University Alumni", "Computer Science and Engineering","Software Engineer", "Full Stack Developer"],
                                autoStart: true,
                                loop: true,
                                delay: 70,
                                deleteSpeed: 20,
                            }}
                        />
                    </div>
                </div>
            </div>
            <HamburgerMenu />
        </section>
    )
};