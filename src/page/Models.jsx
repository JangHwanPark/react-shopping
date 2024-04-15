import React from 'react';
import styles from './Models.module.scss';
import models from "../data/models.json";
import {Link} from "react-router-dom";
import {useTab} from "../context/TabContext";

// import Components
import TabView from "../components/TabView/TabView";
import ProductInformation from "../components/ProductsInformation/ProductInformation";

export default function Models() {
    const {currentTab, setCurrentTab} = useTab();

    return (
        <main className={styles.modelsContainer}>
            <TabView title={'구매'} currentTab={currentTab} setCurrentTab={setCurrentTab}/>
            {/* 선택한 모델 출력 */}
            <div className={styles.selectedModelDisplay}>
                <img src={models[currentTab].imgWhitePear} alt={models[currentTab].name}/>
            </div>
            <section className={styles.modelInformation}>
                <ProductInformation
                    className={'flex'}
                    currentTab={currentTab}
                    sliceStart={0}
                    sliceEnd={7}
                >
                    {/* 전달받은 value 를 span 태그로 감싸서 출력 */}
                    {(key, value) => <p><strong>{value}</strong></p>}
                </ProductInformation>
                <div className={`${styles.btnModelWrapper} flex`}>
                    {/* 클릭시 ModelDetail Page 로이동예정 */}
                    <Link to={`/model/${models[currentTab].name}/model-configuration`} className={'btn-primary'}>
                        내차 만들기
                    </Link>
                    <Link to={'/test-drive'} className={'btn-primary'}>
                        시승신청
                    </Link>
                </div>
            </section>
            <section className={styles.modelInformation}>
                <button>Interior</button>
                <button>exterior</button>
                <ProductInformation
                    currentTab={currentTab}
                    sliceStart={9}
                    sliceEnd={12}
                >
                    {/* 전달받은 value 를 img src 로 사용 */}
                    {(key, value) => <img src={value} alt={`${key} 이미지`} width={'100%'}/>}
                </ProductInformation>
            </section>
        </main>
    );
}