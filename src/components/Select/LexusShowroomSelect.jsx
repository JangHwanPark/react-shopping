import React from 'react';

export default function LexusShowroomSelect({showRooms}) {
    return (
        <select name="" id="">
            {showRooms.map(({name, address}) => (
                <option key={address} value={name}>
                    {name}
                </option>
            ))}
        </select>
    );
}