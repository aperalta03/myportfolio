import React, { useState } from "react";
import styles from "./hamburgermenu.module.css";
import { getImageUrl } from "../../../utils";

const HamburgerMenu = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <div className={styles.menu}>
            <img 
                className={styles.menuBtn} 
                src={menuOpen ? getImageUrl("nav/closeIcon.png") : getImageUrl("nav/menuIcon.png")} 
                alt="Alonso Peralta"
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
    );
};

export default HamburgerMenu;
