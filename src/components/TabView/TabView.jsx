import React, {useState} from 'react';
import models from "../../data/models.json";

export default function TabView({title}) {
    const [currentTab, setCurrentTab] = useState(0);

    const selectMenuHandler = (index) => {
        // 매개변수로 이벤트값을 사용하지 않고, 현재 선택한 인덱스 값을 전달해야한다.
        // 이벤트 객체 전달시 버블링으로 사이드 이펙트 발생 가능성, 상태 관리 복잡해질수있음.
        setCurrentTab(index)
    }

    return (
        /* 동적 라우팅 사용 예정 */
        <section>
            <h2>{title} 차량 선택</h2>
            {models.map(({name}, index) => (
                <ul key={index}>
                    <li onClick={() => selectMenuHandler(index)}>
                        {name}
                    </li>
                </ul>
            ))}

            {/* 선택한 모델 출력 */}
            <div>
                Current 모델: {models[currentTab].name || '모델 없음'}
            </div>
        </section>
    );
}