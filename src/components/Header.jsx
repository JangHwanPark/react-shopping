import React from 'react';
import styles from './Header.modul.css';
import {Link} from "react-router-dom";

const navLinks = [
    { to: '/', label: 'MODEL' },
    { to: '/purchase', label: 'BUY' }, // 'BUY' 링크의 정확한 경로를 예시로 추가함
    { to: '/service', label: 'SERVICE' }, // 가정한 경로, 실제 프로젝트에 맞게 수정 필요
    { to: '/brand', label: 'BRAND' }, // 가정한 경로, 실제 프로젝트에 맞게 수정 필요
    { to: '/test-drive', label: '시승신청' },
    { to: '/lounge', label: 'LEXUS LOUNGE' },
    { to: '/login', label: 'LOGIN' },
];

export default function Header() {
    return (
        <header className={styles.header}>
            <div className={styles.logo_wrap}>
                <img src="/img/logo_lexus@2x.png" alt="Lexus Korea Logo"/>
            </div>
            <nav className={styles.global_navigation}>
                <ul className={styles.item_list}>
                    {navLinks.slice(0, 4).map(({to, label}, idx) => (
                        <li className={styles.item}><Link to={to}>{label}</Link></li>
                    ))}
                </ul>
                <ul className={styles.item_list}>
                    {navLinks.slice(4).map(({to, label}, idx) => (
                        <li className={styles.item}><Link to={to}>{label}</Link></li>
                    ))}
                </ul>
            </nav>
        </header>
    );
}