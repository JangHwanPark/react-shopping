import React from 'react';
import {Link} from "react-router-dom";
import models from "../data/models.json";
import {useTab} from "../context/TabContext";

// import Components
import TabView from "../components/TabView/TabView";
import ProductInformation from "../components/ProductsInformation/ProductInformation";


export default function Models() {
    const {currentTab, setCurrentTab} = useTab();
    console.log(currentTab)

    return (
        <main>
            <TabView title={'구매'} currentTab={currentTab} setCurrentTab={setCurrentTab}/>
            <ProductInformation currentTab={currentTab}/>
            <Link to={`/model/${models[currentTab].name}/model-configuration`}>내차 만들기</Link> {/*클릭시 ModelDetail Page 로
             이동예정*/}
            <Link to={'/test-drive'}>시승신청</Link>
            <section>
                <div>차량 스펙 간략화</div>
            </section>
            <ul>
                <li>차량 내부 디자인 (데이터 추가 예정)</li>
                <li>차량 외부 디자인 (데이터 추가 예정)</li>
            </ul>
        </main>
    );
}