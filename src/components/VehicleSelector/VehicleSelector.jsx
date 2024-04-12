import React from 'react';
import models from "../../data/models.json";

export default function VehicleSelector({title}) {
    return (
        /* 동적 라우팅 사용 예정 */
        <section>
            <h2>{title} 차량 선택</h2>
            {models.map(({name}, index) => (
                <ul key={index}>
                    <li>{name}</li>
                </ul>
            ))}
            <div>Default 모델: {models[0]?.name || '모델 없음'}</div>
        </section>
    );
}