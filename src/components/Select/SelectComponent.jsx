import React from 'react';

export default function SelectComponent({selectItems}) {
    return (
        <select>
            {selectItems.map((item) => (
                <option key={item} value={item}>
                    {item}
                </option>
            ))}
        </select>
    );
}