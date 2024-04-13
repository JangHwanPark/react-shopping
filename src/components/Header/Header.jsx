import React from 'react';
import styles from './Header.module.css';
import models from "../../data/models.json";

import {Link} from "react-router-dom";
import {useAuth} from "../../context/AuthContext";
import {useTab} from "../../context/TabContext";

export default function Header() {
    const {user} = useAuth();
    const {currentTab, setCurrentTab} = useTab();

    return (
        <header className={styles.header}>
            <div className={styles.inner_wrap}>
                <Link to={'/'} className={styles.logo}>
                    <img src="/img/logo_lexus@2x.png" alt="Lexus Korea Logo"/>
                </Link>
                <div className={styles.glb_wrap}>
                    <nav className={styles.global_navigation}>
                        <ul className={styles.item_list}>
                            <li className={styles.item}>
                                <Link to={`/models/${models[currentTab].name}`}>MODEL</Link>
                            </li>
                            <li className={styles.item}>
                                <Link to="/test-drive">시승신청</Link>
                            </li>
                        </ul>
                    </nav>
                    <ul className={styles.item_list}>
                        <li className={styles.item}>
                            <Link to={user ? `/lounge?=${user.displayName}` : '/login'}>
                                {user ? `${user.displayName} MY LEXUS LOUNGE` : "MY LEXUS LOUNGE"}
                            </Link>
                        </li>
                        <li className={styles.item}>
                            <Link to="/login">{user ? "LOGOUT" : "LOGIN"}</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </header>
    );
}