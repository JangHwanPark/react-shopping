import React, {useState} from 'react';
import styles from "./Header.module.css";
import {Link} from "react-router-dom";
import {useAuth} from "../../context/AuthContext";
import models from '../../data/models.json';

const route = [
    { href: '/model/RX', label: 'MODEL', id: 'model' },
    { href: '/test-drive', label: '시승신청', id: 'test-drive' },
    //{ href: '/lounge', label: 'MY LEXUS LOUNGE', id: 'lexus-lounge' },
    { href: '/lounge?name=root', label: 'MY LEXUS LOUNGE', id: 'lexus-lounge' },
    { href: '/login', label: 'LOGIN', id: 'login' },
];

export default function HeaderItem({sliceStart, sliceEnd}) {
    const {user} = useAuth();
    const [selectedModel, setSelectedModel] = useState('RX'); // 기본값 'RX'

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
                    <Link to={href}>
                        {user && label === 'LOGIN' ? 'LOGOUT' : `${label}`}
                    </Link>
                </li>
            ))}
        </ul>
    );
}