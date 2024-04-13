import React from 'react';
import models from "../../data/models.json";

export default function TabView({title, currentTab, setCurrentTab}) {
    const selectMenuHandler = (index) => {
        // 매개변수로 이벤트값을 사용하지 않고, 현재 선택한 인덱스 값을 전달해야한다.
        // 이벤트 객체 전달시 버블링으로 사이드 이펙트 발생 가능성, 상태 관리 복잡해질수있음.
        setCurrentTab(index)
    }

    let cnt = 0;
    return (
        /* 동적 라우팅 사용 예정 */
        <section>
            <h2>{title} 차량 선택</h2>
            {models.map(({name, imgWhitePear}, index) => {
                console.log("순회 카운트: ", cnt++, " 결과값: ", models)
                console.log("현재 선택한 종류: ", currentTab)
                return (
                    <ul key={index}>
                        <li onClick={() => selectMenuHandler(index)}>
                            {name}
                        </li>
                    </ul>
                )
            })}

            {/* 선택한 모델 출력 */}
            <div>
                <h3>{models[currentTab].name || '모델 없음'}</h3>
                <img src={models[currentTab].imgWhitePear} alt={models[currentTab].name}/>
            </div>
        </section>
    );
}