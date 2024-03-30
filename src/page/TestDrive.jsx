import React from 'react';
import model from '../data/model.json';

export default function TestDrive() {
    return (
        <main>
            <h1>시승 신청</h1>
            <div>
                <div>페이지 상태관리</div>
                <div>시승 차량 선택</div>
                <div>전시장 선택</div>
                <div>개인정보 입력</div>
            </div>
            <section>
                <div>모델 명칭</div>
                {model.LexusVehicles.map(({model}) => (
                    <div>{model}</div>
                ))}
                <div>명칭에 따른 모델 출력</div>
            </section>
        </main>
    );
}