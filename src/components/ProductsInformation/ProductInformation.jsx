import React from 'react';
import models from "../../data/models.json";

export default function ProductInformation({ currentTab }) {
    const model = models[currentTab];
    console.log(model)

    return (
        <div>
            <ul>
                {/* 객체를 배열로 변환하여 순회하며 요소 출력 */}
                {/* 슬라이스를 사용하여 이미지를 제외한 정보만 출력 */}
                {Object.entries(model).slice(0, 7).map(([key, value]) => (
                    <li key={key}>{value}</li>
                ))}
            </ul>
        </div>
    );
}