import React, {useState} from 'react';
import styles from "./Header.module.css";
import {Link} from "react-router-dom";
import {useAuth} from "../../context/AuthContext";
import {useTab} from "../../context/TabContext";
import models from '../../data/models.json';



export default function HeaderItem({sliceStart, sliceEnd}) {
    const {user} = useAuth();
    const {currentTab, setCurrentTab} = useTab();
    //console.log(currentTab)
    if (user && user.displayName) {
        console.log(user.displayName);
    } else {
        console.log("User is not defined or displayName is missing");
    }

    const route = [
        {href: '/models/RX', label: 'MODEL', id: 'model'},
        {href: '/test-drive', label: '시승신청', id: 'test-drive'},
        //{ href: '/lounge', label: 'MY LEXUS LOUNGE', id: 'lexus-lounge' },
        { href: `/lounge?name=`, label: 'MY LEXUS LOUNGE', id: 'lexus-lounge' },
        {href: '/login', label: 'LOGIN', id: 'login'},
    ];

    return (
        <ul className={styles.item_list}>
            {/*<li>
                <select onChange={(e) => setSelectedModel(e.target.value)} value={selectedModel}>
                    {models.map(model => (
                        <option key={model.id} value={model.id}>
                            {model.name}
                        </option>
                    ))}
                </select>
            </li>*/}
            {route.slice(sliceStart, sliceEnd).map(({href, label, id}) => (
                <li key={id} className={styles.item}>
                    {user && label === 'MY LEXUS LOUNGE' ? (
                        <Link to={`/lounge/${user.displayName}`}>{label}</Link>
                    ) : (
                        <Link to={href}>
                            {user && label === 'LOGIN' ? 'LOGOUT' : label}
                        </Link>
                    )}
                </li>
            ))}
        </ul>
    );
}