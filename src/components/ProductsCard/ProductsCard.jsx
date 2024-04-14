import React from 'react';
import styles from './ProductsCard.module.scss';
import {Link} from "react-router-dom";

export default function ProductsCard({models}) {
    return (
        <section className={styles.productCard}>
            {models.map(({name, basePrice, img}, index) => (
                <article key={index} className={styles.productItem}>
                    <figure className={styles.productImage}>
                        <img src={img} alt={name}/>
                    </figure>
                    <div className={styles.productInfoWrapper}>
                        <div className={styles.productInfo}>
                            <h2>{name}</h2>
                            <p><strong>{basePrice}원 ~</strong></p>
                        </div>
                        <div className={styles.productActions}>
                            <Link to={'/'}>상세보기</Link>
                            <Link to={'/test-drive'}>시승신청</Link>
                        </div>
                    </div>
                </article>
            ))}
        </section>
    );
}