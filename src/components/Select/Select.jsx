import React from 'react';

export default function Select({ className, value, onChange, options }) {
    return (
        <select className={className} value={value} onChange={onChange}>
            {options.map(option => (
                <option key={option.value} value={option.value}>
                    {option.label}
                </option>
            ))}
        </select>
    );
}