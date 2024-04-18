import React from 'react';

export default function BaseLayout({children}) {
    return (
        <div className={'base_layout'}>
            {children}
        </div>
    );
}