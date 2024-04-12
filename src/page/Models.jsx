import React from 'react';

// import Components
import TabView from "../components/TabView/TabView";
import ProductInformation from "../components/ProductsInformation/ProductInformation";
import Button from "../components/Button/Button";

export default function Models() {
    return (
        <main>
            <TabView title={'구매'}/>
            <ProductInformation/>
            <Button title={'구매하기'}/>
            <Button title={'시승신청'}/>
            <div>차량 내부 디자인</div>
            <div>차량 외부 디자인</div>
        </main>
    );
}