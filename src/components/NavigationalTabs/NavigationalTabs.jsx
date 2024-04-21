import React from 'react';
import { NavLink } from "react-router-dom";
import Title from "../Title/Title";

/**
 * NavigationalTabs 컴포넌트는 탭 또는 카테고리 네비게이션을 제공합니다.
 * @param {String} title - 제목 텍스트
 * @param {Array} items - 탭/카테고리 항목 배열 { name: String, path: String }
 * @param {String} className - 추가적인 스타일링을 위한 클래스
 * @param {Function} onTabSelect - 탭 선택 핸들러 (선택적)
 * @param {Number} currentTab - 현재 선택된 탭 인덱스 (선택적)
 */
export default function NavigationalTabs({ title, items, className, onTabSelect, currentTab }) {
    // DebugLog
    console.log('Items:', items);

    const handleTabSelection = (index) => {
        // 매개변수로 이벤트값을 사용하지 않고, 현재 선택한 인덱스 값을 전달해야한다.
        // 이벤트 객체 전달시 버블링으로 사이드 이펙트 발생 가능성, 상태 관리 복잡해질수있음.
        if (onTabSelect) {
            onTabSelect(index);
        }
    };

    return (
        <section className={`${className} category`}>
            <Title titleText={title}/>

            {/* 카테고리 */}
            <ul className={'flex-center'}>
                {items.map((item, index) => (
                    <li key={index} onClick={() => handleTabSelection(index)}>
                        <NavLink
                            className={({ isActive }) => isActive ? 'active' : ''}
                            to={item.path}>
                            <p><strong>{item.name}</strong></p>
                        </NavLink>
                    </li>
                ))}
            </ul>
        </section>
    );
}