import React , { useState } from "react";
import styles from "./navbar.module.css"
import { getImageUrl } from "../../utils";
import TypeWriter from 'typewriter-effect';

export const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    return (
        <section className={styles.container}>
            <div className={styles.content}>
                <div className={styles.blurredContainer}>
                    {/* Profile Header */}
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
            <div className={styles.menu}>
                {/* HAMBURGER MENU */}
                <img 
                    className={styles.menuBtn} 
                    src={menuOpen ? getImageUrl("nav/closeIcon.png") : getImageUrl("nav/menuIcon.png")} 
                    alt="menu-button"
                    onClick={() => setMenuOpen(!menuOpen)}
                />
                <ul 
                    className={`${styles.menuItems} ${menuOpen && styles.menuOpen}`}
                    onClick={() => setMenuOpen(false)}
                >
                    <a className={styles.menuItem} href="#about">About</a>
                    <a className={styles.menuItem} href="#experience">Experience</a>
                    <a className={styles.menuItem} href="#projects">Projects</a>
                </ul>
            </div> 
        </section>
    )
};