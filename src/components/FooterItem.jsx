import React from 'react';
import styles from './Footer.module.css';
import {Link} from "react-router-dom";

export default function FooterItem({title, items}) {
    return (
        <div className={styles.list_wrap}>
            <h2 className={styles.list_title}>{title}</h2>
            <ul className={styles.footer_list}>
                {items.map(({id, href, label}) => (
                    <li key={id} className={styles.footer_item}>
                        <Link to={href}><span>{label}</span></Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}