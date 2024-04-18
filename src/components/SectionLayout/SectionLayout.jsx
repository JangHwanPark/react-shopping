import React from 'react';

export default function SectionLayout({title, className, children}) {
    return (
        <section className={className}>
            <h2>{title}</h2>
            {children}
        </section>
    );
}