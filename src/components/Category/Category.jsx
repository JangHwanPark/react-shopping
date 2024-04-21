import React from 'react';
import {NavLink} from "react-router-dom";

/**
 * 경로에 따른 활성 상태를 가지는 카테고리 네비게이션.
 * @param {Array} categories - 카테고리 객체 배열 { name: String, path: String }
 * @param {String} className - 스타일링을 위한 추가 클래스
 */
export default function Category({categories, className}) {
    return (
        <nav className={className}>
            <ul className={'flex-space-around'}>
                {categories.map((category, index) => (
                    <li key={index}>
                        <NavLink
                            className={({isActive}) => isActive ? 'active' : ''}
                            to={category.path}>
                            <h2>{category.name}</h2>
                        </NavLink>
                    </li>
                ))}
            </ul>
        </nav>
    );
}