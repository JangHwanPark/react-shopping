import React from 'react';
import models from "../../data/models.json";

export default function VehicleSelector({title}) {
    return (
        <section>
            <h2>{title} 차량 선택</h2>
            {models.map(({name}) => (
                <div>{name}</div>
            ))}
            <div>명칭에 따른 모델 출력 Default: RX</div>
        </section>
    );
}