import React, { useState } from "react";
import styles from "./hamburgermenu.module.css";
import { getImageUrl } from "../../../utils";

const HamburgerMenu = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const handleMenuClick = (e, targetId) => {
        e.preventDefault();
        const target = document.getElementById(targetId);
        if (target) {
            const offset = target.getBoundingClientRect().top;
            window.scrollTo({
                top: offset,
                behavior: 'smooth'
            });
        }
        setMenuOpen(false);
    };

    return (
        <div className={styles.menu}>
            <img 
                className={styles.menuBtn} 
                src={menuOpen ? getImageUrl("nav/closeIcon.png") : getImageUrl("nav/menuIcon.png")} 
                alt="Alonso Peralta"
                onClick={() => setMenuOpen(!menuOpen)}
            />
            <ul 
                className={`${styles.menuItems} ${menuOpen ? styles.menuOpen : ""}`}
            >
                <a className={styles.menuItem} href="#about" onClick={(e) => handleMenuClick(e, 'about')}>About</a>
                <a className={styles.menuItem} href="#experience" onClick={(e) => handleMenuClick(e, 'experience')}>Experience</a>
                <a className={styles.menuItem} href="#projects" onClick={(e) => handleMenuClick(e, 'projects')}>Projects</a>
            </ul>
        </div> 
    );
};

export default HamburgerMenu;
