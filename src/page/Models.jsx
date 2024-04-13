import React, {useState} from 'react';

// import Components
import TabView from "../components/TabView/TabView";
import ProductInformation from "../components/ProductsInformation/ProductInformation";
import {Link} from "react-router-dom";

export default function Models() {
    const [currentTab, setCurrentTab] = useState(0);

    return (
        <main>
            <TabView title={'구매'} currentTab={currentTab} setCurrentTab={setCurrentTab}/>
            <ProductInformation/>
            <Link to={'/'}>내차 만들기</Link> {/*클릭시 ModelDetail Page 로 이동예정*/}
            <Link to={'/'}>시승신청</Link>
            <div>차량 내부 디자인</div>
            <div>차량 외부 디자인</div>
        </main>
    );
}