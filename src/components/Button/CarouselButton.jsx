import React from 'react';

export default function CarouselButton({key, className, onClick, label}) {
    return (
        <button key={key} className={className} onClick={onClick}>
            {label}
        </button>
    );
}