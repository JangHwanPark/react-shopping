import React, {useState} from 'react';
import {useTab} from "../../context/TabContext";
import ImageBlock from "../../components/Image/ImageBlock";
import models from "../../data/models.json";
import ProductInformation from "../../components/ProductsInformation/ProductInformation";
import Button from "../../components/Button/Button";
import {useParams} from "react-router-dom";
import StatefulTab from "../../components/StatefulTab/StatefulTab";

export default function ModelConfiguration() {
    const { modelId} = useParams();
    const {currentTab, setCurrentTab} = useTab();

    // 각 섹션의 현재 선택 상태를 관리하는 상태 변수
    const [selectedSection, setSelectedSection] = useState('모델 및 등급');

    // 사용자가 탭을 클릭했을 때 호출될 함수
    const handleSectionClick = (sectionName) => {
        setSelectedSection(sectionName);
    };

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
                <div className={'configuration_tabs'}>
                    {['모델 및 등급', '익스테리어', '인테리어', '선택완료'].map((sectionName) => (
                        <StatefulTab
                            key={sectionName}
                            title={sectionName}
                            onClick={() => handleSectionClick(sectionName)}
                            isSelected={selectedSection === sectionName}
                        />
                    ))}
                    <div className={'configuration_content'}>
                        {/* Content based on selected section */}
                        {selectedSection === '모델 및 등급' && <p>여기에 모델 및 등급 관련 내용을 표시합니다.</p>}
                        {selectedSection === '익스테리어' && <p>여기에 익스테리어 옵션을 표시합니다.</p>}
                        {selectedSection === '인테리어' && <p>여기에 인테리어 옵션을 표시합니다.</p>}
                        {selectedSection === '선택완료' && <p>선택한 모든 옵션을 확인하고 견적을 완료합니다.</p>}
                    </div>
                </div>
            </section>
            <div className={'btn-wrap flex-center'}>
                <Button title={'이전'} className={'btn-primary'}/>
                <Button title={'다음'} className={'btn-primary'}/>
            </div>
        </main>
    );
}