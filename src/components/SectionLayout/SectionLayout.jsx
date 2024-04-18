import React from 'react';

export default function SectionLayout({title, children}) {
    return (
        <section>
            <h2>{title}</h2>
            {children}
        </section>
    );
}