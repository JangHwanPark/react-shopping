import React from 'react';

/**
 * 범용 Select 컴포넌트
 * @param {Array} selectItems - 선택 항목 객체 배열
 * @param {String} labelKey - 옵션 레이블을 위한 객체 키
 * @param {String} valueKey - 옵션 값으로 사용할 객체 키
 * @param onChange
 */
export default function SelectComponent({selectItems, labelKey, valueKey, onChange }) {
    return (
        <select onChange={onChange}>
            {selectItems.map((item, index) => (
                <option key={index} value={item[valueKey]}>
                    {item[labelKey]}
                </option>
            ))}
        </select>
    );
}