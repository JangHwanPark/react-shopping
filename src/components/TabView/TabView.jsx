import React from 'react';
import models from "../../data/models.json";
import {Link} from "react-router-dom";
import Title from "../Title/Title";

export default function TabView({title, currentTab, setCurrentTab}) {
    const selectMenuHandler = (index) => {
        // 매개변수로 이벤트값을 사용하지 않고, 현재 선택한 인덱스 값을 전달해야한다.
        // 이벤트 객체 전달시 버블링으로 사이드 이펙트 발생 가능성, 상태 관리 복잡해질수있음.
        setCurrentTab(index)
    }

    return (
        <section className={'tabview_container'}>
            <Title titleText={`${title} 차량 선택`}/>
            <ul className={'tabview_list'}>
                {models.map(({name}, index) => (
                    <li className={'tabview_item'} key={index} onClick={() => selectMenuHandler(index)}>
                        <Link className={'tabview_link'} to={`/models/${name}`}>
                            <p><strong>{name}</strong></p>
                        </Link>
                    </li>
                ))}
            </ul>
        </section>
    );
}