import React from 'react';

export default function Input({ id, className, divClassName, title, type, placeholder}) {
    return (
        <div className={divClassName}>
            <label htmlFor={id}>{title}</label>
            <input id={id} className={className} type={type} placeholder={placeholder}/>
        </div>
    );
}