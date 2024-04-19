import React from 'react';
import models from "../data/models.json";
import {Link} from "react-router-dom";
import {useTab} from "../context/TabContext";

// import Components
import ProductInformation from "../components/ProductsInformation/ProductInformation";
import ImageBlock from "../components/Image/ImageBlock";
import Button from "../components/Button/Button";
import ModelLayout from "../layout/ModelLayout";

export default function Models() {
    const {currentTab, setCurrentTab} = useTab();

    return (
        <ModelLayout title={'구매'} currentTab={currentTab} setCurrentTab={setCurrentTab}>
            {/* Middle Section */}
            <div className={'flex-center'}>
                <section className={'model_info'}>
                    {/* 이미지 컴포넌트: 선택한 모델 출력 */}
                    <ImageBlock
                        className={'selected_model_img'}
                        src={models[currentTab].imgWhitePear}
                        alt={models[currentTab].name}
                    />
                    {/* Model info Table */}
                    <ProductInformation
                        className={'info_wrapper flex-center'}
                        ulClassName={'info_list flex'}
                        liClassName={'info_item flex-column'}
                        currentTab={currentTab}
                        sliceStart={1}
                        sliceEnd={7}
                    >
                        {/* 전달받은 value 를 span 태그로 감싸서 출력 */}
                        {(key, value) => (
                            <>
                                <span>{key}</span>
                                <span><strong>{value}</strong></span>
                            </>
                        )}
                    </ProductInformation>
                    {/* Link button */}
                    <div className={`link_wrap flex`}>
                        <Link
                            to={`/model/${models[currentTab].name}/model-configuration`}
                            className={'btn-primary'}
                        >
                            <strong>내차 만들기</strong>
                        </Link>
                        <Link
                            to={'/test-drive'}
                            className={'btn-primary'}
                        >
                            <strong>시승신청</strong>
                        </Link>
                    </div>
                </section>
            </div>

            {/* Bottom Section */}
            <section className={'model_design flex-column'}>
                <div className={'flex-center'}>
                    <Button title={'Interior'} className={'btn-primary'}/>
                    <Button title={'exterior'} className={'btn-primary'}/>
                </div>
                <ProductInformation
                    currentTab={currentTab}
                    sliceStart={9}
                    sliceEnd={12}
                >
                    {/* 전달받은 value 를 img src 로 사용 */}
                    {(key, value) => <img src={value} alt={`${key} 이미지`} width={'100%'}/>}
                </ProductInformation>
            </section>
        </ModelLayout>
    );
}