import React from 'react';
import {useSearchParams} from "react-router-dom";

export default function Lounge() {
    const [searchParams] = useSearchParams();
    const name = searchParams.get('name');
    console.log(name)

    return (
        <div>
            <h2>MY LEXUS LOUNGE</h2>
            {name && <p>Hello, {name}!</p>}
        </div>
    );
}