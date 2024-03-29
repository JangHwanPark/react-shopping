import React from 'react';
import styles from './Header.module.css';
import {Link} from "react-router-dom";
import HeaderItem from "./HeaderItem";

export default function Header() {
    return (
        <header className={styles.header}>
            <div className={styles.inner_wrap}>
                <Link to={'/'} className={styles.logo}>
                    <img src="/img/logo_lexus@2x.png" alt="Lexus Korea Logo"/>
                </Link>
                <div className={styles.glb_wrap}>
                    <nav className={styles.global_navigation}>
                        <HeaderItem sliceStart={0} sliceEnd={4}/>
                    </nav>
                    <HeaderItem sliceStart={4}/>
                </div>
            </div>
        </header>
    );
}