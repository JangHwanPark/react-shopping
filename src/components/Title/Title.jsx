import React from 'react';

export default function Title({title}) {
    return (
        <h1 className={'page_title'}>
            <span>{title}</span>
        </h1>
    );
}