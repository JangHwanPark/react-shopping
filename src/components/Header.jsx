import React from 'react';
import styles from './Header.module.css';
import {Link} from "react-router-dom";
import {route} from "../data";

export default function Header() {
    return (
        <header className={styles.header}>
            <div className={styles.inner_wrap}>
                <Link to={'/'} className={styles.logo}>
                    <img src="/img/logo_lexus@2x.png" alt="Lexus Korea Logo"/>
                </Link>
                <div className={styles.glb_wrap}>
                    <nav className={styles.global_navigation}>
                        <ul className={styles.item_list}>
                            {route.slice(0, 4).map(({href, label, id}) => (
                                <li key={id} className={styles.item}>
                                    <Link to={href}>{label}</Link>
                                </li>
                            ))}
                        </ul>
                    </nav>
                    <ul className={styles.item_list}>
                        {route.slice(4).map(({href, label, id}) => (
                            <li key={id} className={styles.item}>
                                <Link to={href}>{label}</Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </header>
    );
}