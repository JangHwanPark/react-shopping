import React, {useState} from 'react';
import {useTab} from "../../context/TabContext";
import ImageBlock from "../../components/Image/ImageBlock";
import models from "../../data/models.json";
import ProductInformation from "../../components/ProductsInformation/ProductInformation";
import Button from "../../components/Button/Button";
import {useParams} from "react-router-dom";
import StatefulTab from "../../components/StatefulTab/StatefulTab";

export default function ModelConfiguration() {
    const {modelId} = useParams();
    const {currentTab, setCurrentTab} = useTab();

    // 각 섹션의 현재 선택 상태를 관리하는 상태 변수
    const sections = ['모델 및 등급', '익스테리어', '인테리어', '선택완료'];
    const [selectedSectionIndex, setSelectedSectionIndex] = useState(0);
    const selectedSection = sections[selectedSectionIndex];

    // 다음 or 이전 탭으로 이동
    const handleClickNext = () => {
        if (selectedSectionIndex < sections.length - 1) {
            setSelectedSectionIndex(selectedSectionIndex + 1);
        }
    }

    const handleClickPrev = () => {
        if (selectedSectionIndex > 0) {
            setSelectedSectionIndex(selectedSectionIndex - 1);
        }
    }

    // 사용자가 탭을 클릭했을 때 호출될 함수
    const handleSectionClick = (sectionName) => {
        setSelectedSectionIndex(sectionName);
    };

    return (
        <div className={'model_config_wrapper'}>
            <main className={'model_config flex-column'}>
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

                <div className={'selected_model_display'}>
                    {/* Select Model Image */}
                    <section className={'section_model'}>
                        <ImageBlock
                            className={'selected_model_img'}
                            src={models[currentTab].imgWhitePear}
                            alt={models[currentTab].name}
                        />
                    </section>

                    {/* Select Model info */}
                    <section className={'config_info flex-column'}>
                        <div className={'configuration_tabs'}>
                            {['모델 및 등급', '익스테리어', '인테리어', '선택완료'].map((sectionName) => (
                                <StatefulTab
                                    key={sectionName}
                                    title={sectionName}
                                    onClick={() => handleSectionClick(sectionName)}
                                    isSelected={selectedSection === sectionName}
                                />
                            ))}
                            {/* Content based on selected section */}
                            <div className={'configuration_content'}>
                                {selectedSection === '모델 및 등급' && <p>여기에 모델 및 등급 관련 내용을 표시합니다.</p>}
                                {selectedSection === '익스테리어' && <p>여기에 익스테리어 옵션을 표시합니다.</p>}
                                {selectedSection === '인테리어' && <p>여기에 인테리어 옵션을 표시합니다.</p>}
                                {selectedSection === '선택완료' && <p>선택한 모든 옵션을 확인하고 견적을 완료합니다.</p>}
                            </div>
                        </div>
                        <div className={'btn-wrap flex-center'}>
                            {selectedSectionIndex < sections.length - 1 ? (
                                <>
                                    <Button title={'이전'} className={'btn-primary'} onClick={handleClickPrev}/>
                                    <Button title={'다음'} className={'btn-primary'} onClick={handleClickNext}/>
                                </>
                            ) : (
                                <>
                                    <Button title={'저장하기'} className={'btn-primary'}/>
                                    <Button title={'시승신청'} className={'btn-primary'}/>
                                </>
                            )}
                        </div>
                    </section>
                </div>
            </main>
        </div>
    );
}