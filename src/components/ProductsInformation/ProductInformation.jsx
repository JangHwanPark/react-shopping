import React from 'react';
import models from "../../data/models.json";

export default function ProductInformation({ className, currentTab, sliceStart, sliceEnd, children }) {
    const model = models[currentTab];

    return (
        <div className={`modelInfo_wrapper ${className}`}>
            {/* Todo: 리스트 앞 뒤로 추가 텍스트 삽입 */}
            <ul className={`model_info_list ${className}`}>
                {/* 객체를 배열로 변환하여 순회하며 요소 출력 */}
                {/* 슬라이스를 사용하여 이미지를 제외한 정보만 출력 */}
                {Object.entries(model).slice(sliceStart, sliceEnd).map(([key, value]) => (
                    <li key={key}>
                        {/* children 을 함수로 사용(부모에게 인자로 value 전달) */}
                        {typeof children === 'function' ? children(key, value) : null}
                    </li>
                ))}
            </ul>
        </div>
    );
}