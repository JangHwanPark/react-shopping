import React from 'react';

/**
 * @param categories - array type element
 */
export default function Category({categories}) {
    // Test
    console.log(categories)
    categories.forEach((item) => {
        console.log('item: ', item)
    })

    return (
        <nav className={''}>
            <ul className={'flex-center'}>
                {categories.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </nav>
    );
}