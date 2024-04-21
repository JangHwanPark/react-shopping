import React, {useState} from 'react';
import {useTab} from "../../context/TabContext";
import ImageBlock from "../../components/Image/ImageBlock";
import models from "../../data/models.json";
import ProductInformation from "../../components/ProductsInformation/ProductInformation";
import {useParams} from "react-router-dom";
import StatefulTab from "../../components/TabComponents/StatefulTab";
import ModelConfigButton from "../../components/Button/ModelConfigButton";
import ConfigurationContainer from "../../components/TabComponents/ModelSections";

export default function ModelConfiguration() {
    const {modelId} = useParams();
    const {currentTab, setCurrentTab} = useTab();

    // 각 섹션의 현재 선택 상태를 관리하는 상태 변수
    const sections = ['모델 및 등급', '익스테리어', '인테리어', '선택완료'];
    const [selectedSectionIndex, setSelectedSectionIndex] = useState(0);

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
                            {['모델 및 등급', '익스테리어', '인테리어', '선택완료'].map((sectionName, index) => (
                                <StatefulTab
                                    key={index}
                                    title={sectionName}
                                    onClick={() => setSelectedSectionIndex(index)}
                                    isSelected={selectedSectionIndex === index}
                                />
                            ))}
                            {/* 선택된 섹션에 해당하는 컴포넌트를 렌더링 */}
                            <div className={'configuration_content'}>
                                {ConfigurationContainer &&
                                    <ConfigurationContainer selectedSection={sections[selectedSectionIndex]}/>}
                            </div>
                        </div>
                        <ModelConfigButton
                            onPrev={handleClickPrev}
                            onNext={handleClickNext}
                            isFinalStep={selectedSectionIndex === sections.length - 1}
                        />
                    </section>
                </div>
            </main>
        </div>
    );
}