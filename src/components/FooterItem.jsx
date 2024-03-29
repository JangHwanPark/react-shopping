import React from 'react';
import {Link} from "react-router-dom";

export default function FooterItem({title, items}) {
    return (
        <div>
            <h3>{title}</h3>
            <ul>
                {items.map(({id, href, label}) => (
                    <li key={id}><Link to={href}>{label}</Link></li>
                ))}
            </ul>
        </div>
    );
}