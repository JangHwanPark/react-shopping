import React from 'react';

export default function Input({title, type, placeholder}) {
    return (
        <div>
            <label htmlFor="">{title}</label>
            <input type={type} placeholder={placeholder}/>
        </div>
    );
}