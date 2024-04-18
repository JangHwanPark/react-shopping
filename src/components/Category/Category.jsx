import React from 'react';

/**
 * @param categories - array type element
 * @param className
 */
export default function Category({categories, className}) {
    // Test
    console.log(categories)
    categories.forEach((item) => {
        console.log('item: ', item)
    })

    return (
        <nav className={className}>
            <ul className={'flex-space-around'}>
                {categories.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </nav>
    );
}