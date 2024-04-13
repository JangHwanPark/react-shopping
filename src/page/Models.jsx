import React from 'react';
import {Link} from "react-router-dom";
import models from "../data/models.json";
import {useTab} from "../context/TabContext";

// import Components
import TabView from "../components/TabView/TabView";
import ProductInformation from "../components/ProductsInformation/ProductInformation";


export default function Models() {
    const {currentTab, setCurrentTab} = useTab();

    return (
        <main>
            <TabView title={'구매'} currentTab={currentTab} setCurrentTab={setCurrentTab}/>
            <section>
                <ProductInformation currentTab={currentTab} sliceStart={0} sliceEnd={7}>
                    {/* 전달받은 value 를 span 태그로 감싸서 출력 */}
                    {(key, value) => <div>{value}</div>}
                </ProductInformation>
                <div>
                    {/* 클릭시 ModelDetail Page 로이동예정 */}
                    <Link to={`/model/${models[currentTab].name}/model-configuration`}>내차 만들기</Link>
                    <Link to={'/test-drive'}>시승신청</Link>
                </div>
            </section>
            <section>
                <ProductInformation currentTab={currentTab} sliceStart={9} sliceEnd={12}>
                    {/* 전달받은 value 를 img src 로 사용 */}
                    {(key, value) => <img src={value} alt={`${key} 이미지`} />}
                </ProductInformation>
            </section>
        </main>
    );
}