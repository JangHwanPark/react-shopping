import React from 'react';

export default function Title({titleText}) {
    return (
        <h1 className={'page_title'}>
            <span>{titleText}</span>
        </h1>
    );
}