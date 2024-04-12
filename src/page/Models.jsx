import React from 'react';
import VehicleSelector from "../components/VehicleSelector/VehicleSelector";

export default function Models() {
    return (
        <main>
            <VehicleSelector title={'구매'}/>
            <div>차량 상세 정보 표시</div>
            <div>차량 내부 디자인</div>
            <div>차량 외부 디자인</div>
        </main>
    );
}