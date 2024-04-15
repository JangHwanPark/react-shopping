import React from 'react';

export default function Select({ value, onChange, options }) {
    return (
        <select value={value} onChange={onChange}>
            {options.map(option => (
                <option key={option.value} value={option.value}>
                    {option.label}
                </option>
            ))}
        </select>
    );
}