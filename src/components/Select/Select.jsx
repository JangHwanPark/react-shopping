import React from 'react';

/**
 * 범용적으로 사용 가능한 드롭다운 선택 컴포넌트
 * @param {string} className - 이 컴포넌트의 CSS 클래스 이름
 * @param {string} value - 현재 선택된 값
 * @param {function} onChange - 값이 변경될 때 호출되는 함수
 * @param {Array} options - 선택 가능한 옵션 배열. 각 옵션은 {value, label} 형태
 * @param {string} defaultOption - 선택 전에 표시될 기본 옵션의 레이블
 * @param {Object} rest - 추가적으로 전달될 프로퍼티를 포함하는 객체, 조건부 렌더링 가능
 */
export default function Select({ className, value, onChange, options, defaultOption, ...rest }) {
    return (
        <select className={className} value={value} onChange={onChange}>
            {/* defaultOption 이 제공되면, 사용자가 다른 옵션을 선택하기 전에 표시할 기본 옵션을 추가 */}
            {defaultOption && (
                <option value="">{defaultOption}</option>
            )}

            {/* options 배열을 순회하여, 각 옵션을 <option> 태그로 변환 */}
            {options.map(({value, label}) => (
                <option key={value} value={value}>
                    {/* rest 객체 내 addDaySuffix가 true면 날짜에 '일' 접미사를 추가 */}
                    {rest.addDaySuffix ? `${label}일` : label}
                </option>
            ))}
        </select>
    );
}