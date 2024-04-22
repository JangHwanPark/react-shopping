import React from 'react';

export default function Input({ ...rest }) {
    const { id, className, divClassName, name, value, onChange, title, type, placeholder } = rest;
    console.log(name)
    return (
        <div className={divClassName}>
            <label htmlFor={id}>{title}</label>
            <input
                id={id}
                className={className}
                name={name}
                value={value}
                onChange={onChange}
                type={type}
                placeholder={placeholder}
            />
        </div>
    );
}