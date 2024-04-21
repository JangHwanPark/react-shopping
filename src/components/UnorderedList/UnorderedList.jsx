import React from 'react';

export default function UnorderedList({className, listItems}) {
    return (
        <ul className={className}>
            {listItems.map(({key, value}, index) => (
                <li key={index}>
                    <strong>{key}</strong>: {value}
                </li>
            ))}
        </ul>
    );
}