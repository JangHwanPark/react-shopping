import React from 'react';
import styles from "./Header.module.css";
import {route} from "../data";
import {Link} from "react-router-dom";
//import {useAuth} from "../context/AuthContext";

export default function HeaderItem({sliceStart, sliceEnd}) {
    //const {user} = useAuth();

    return (
        <ul className={styles.item_list}>
            {route.slice(sliceStart, sliceEnd).map(({href, label, id}) => (
                <li key={id} className={styles.item}>
                    <Link to={href}>
                        {/*{user && label === 'LOGIN' ? 'LOGOUT' : `${label}`}*/}
                        {label}
                    </Link>
                </li>
            ))}
        </ul>
    );
}