import React from 'react';
import {useTab} from "../context/TabContext";
import ImageBlock from "../components/Image/ImageBlock";
import models from "../data/models.json";
import ProductInformation from "../components/ProductsInformation/ProductInformation";
import Button from "../components/Button/Button";
import {useParams} from "react-router-dom";

export default function ModelConfiguration() {
    const { modelId} = useParams();
    const {currentTab, setCurrentTab} = useTab();

    return (
        <main className={'model_config'}>
            {/* Top */}
            <section className={'section_menu'}>
                <div className={'model_title_wrap flex-space-between'}>
                    <h1>{modelId}</h1>
                    <p>나의 취향에 따라 옵션을 선택하고, 예상 견적을 확인하세요.</p>
                </div>
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
            </section>

            {/* Select Model info */}
            <section className={'section_model'}>
                <ImageBlock
                    className={'selected_model_img'}
                    src={models[currentTab].imgWhitePear}
                    alt={models[currentTab].name}
                />
            </section>
            <section>
                모델 및 등급
                익스테리어
                인테리어
                선택완료
            </section>
            <div className={'btn-wrap flex-center'}>
                <Button title={'이전'} className={'btn-primary'}/>
                <Button title={'다음'} className={'btn-primary'}/>
            </div>
        </main>
    );
}