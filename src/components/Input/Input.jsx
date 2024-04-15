import React from 'react';

export default function Input({ id, className, title, type, placeholder}) {
    return (
        <div>
            <label htmlFor={id}>{title}</label>
            <input id={id} className={className} type={type} placeholder={placeholder}/>
        </div>
    );
}