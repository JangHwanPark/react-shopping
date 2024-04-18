import React from 'react';

export default function CarouselButton({index, className, onClick, label}) {
    return (
        <button key={index} className={className} onClick={onClick}>
            {label}
        </button>
    );
}