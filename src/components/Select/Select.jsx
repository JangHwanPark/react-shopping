import React from 'react';

export default function Select({ className, value, onChange, options, ...rest }) {
    return (
        <select className={className} value={value} onChange={onChange}>
            {options.map(({value, label}) => (
                <option key={value} value={value}>
                    {rest.addDaySuffix ? `${label}일` : label}
                </option>
            ))}
        </select>
    );
}