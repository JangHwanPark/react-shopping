import React from 'react';
import styles from "./Header.module.css";
import {Link} from "react-router-dom";
import {useAuth} from "../../context/AuthContext";

const route = [
    { href: '/model', label: 'MODEL', id: 'model' },
    { href: '/test-drive', label: '시승신청', id: 'test-drive' },
    { href: '/lounge', label: 'MY LEXUS LOUNGE', id: 'lexus-lounge' },
    { href: '/login', label: 'LOGIN', id: 'login' },
];

export default function HeaderItem({sliceStart, sliceEnd}) {
    const {user} = useAuth();

    return (
        <ul className={styles.item_list}>
            {route.slice(sliceStart, sliceEnd).map(({href, label, id}) => (
                <li key={id} className={styles.item}>
                    <Link to={href}>
                        {user && label === 'LOGIN' ? 'LOGOUT' : `${label}`}
                    </Link>
                </li>
            ))}
        </ul>
    );
}