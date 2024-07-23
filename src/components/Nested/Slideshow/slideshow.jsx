import React, { useState, useEffect } from 'react';
import styles from './slideshow.module.css';
import { getImageUrl } from '../../../utils';

const Slideshow = ({ images, interval = 10000 }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, interval);

        return () => clearInterval(timer);
    }, [images.length, interval]);

    const goToPrevious = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? images.length - 1 : prevIndex - 1
        );
    };

    const goToNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const goToSlide = (index) => {
        setCurrentIndex(index);
    };

    return (
        <div className={styles.slideshow}>
            <div className={styles.slideshowInner} style={{ transform: `translateX(${-currentIndex * 100}%)` }}>
                {images.map((image, index) => (
                    <div
                        key={index}
                        className={`${styles.slide} ${index === currentIndex ? styles.active : ''}`}
                    >
                        <img src={getImageUrl(image)} alt={`Slide ${index}`} />
                    </div>
                ))}
            </div>
            <div className={styles.dots}>
                {images.map((_, index) => (
                    <span
                        key={index}
                        className={`${styles.dot} ${index === currentIndex ? styles.activeDot : ''}`}
                        onClick={() => goToSlide(index)}
                    ></span>
                ))}
            </div>
        </div>
    );
};

export default Slideshow;
