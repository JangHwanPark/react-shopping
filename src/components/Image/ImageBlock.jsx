import React from 'react';

export default function ImageBlock({ className, src, alt }) {
    return (
        <div className={className}>
            <img src={src} alt={alt} loading="lazy"/>
        </div>
    );
}