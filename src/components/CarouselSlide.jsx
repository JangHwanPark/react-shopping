import React from 'react';
import styles from './CarouselSlide.module.css';

export default function CarouselSlide(props) {
    return (
        <div className={styles.carousel_viewport}>
            <div className={styles.carousel_container}>
                <div className={styles.carousel_item}>CarouselSlide1</div>
                <div className={styles.carousel_item}>CarouselSlide2</div>
                <div className={styles.carousel_item}>CarouselSlide3</div>
            </div>
        </div>
    );
}