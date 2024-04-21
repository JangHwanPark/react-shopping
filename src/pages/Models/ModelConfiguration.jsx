import React from 'react';
import ImageBlock from "../../components/Image/ImageBlock";
import models from "../../data/models.json";
import ProductInformation from "../../components/ProductsInformation/ProductInformation";
import StatefulTab from "../../components/TabComponents/StatefulTab";
import ModelConfigButton from "../../components/Button/ModelConfigButton";
import ConfigurationContainer from "../../components/TabComponents/ModelSections";
import SelectMenu from "../../components/Select/SelectMenu";
import useModelSettings from "../../hooks/useModelSettings";
import useSectionNavigation from "../../hooks/useSectionNavigation";
import useModelTab from "../../hooks/useModelTab";
import {useParams} from "react-router-dom";
import {fieldMappings} from "../../data/my_car";

export default function ModelConfiguration() {
    const { modelId } = useParams();
    const [selectedModel, handleModelChange, currentTab] = useModelTab(modelId);
    const [selectedSectionIndex, nextSection, prevSection] = useSectionNavigation();
    const {
        modelGrade,
        setModelGrade,
        selectedExterior,
        setSelectedExterior,
        selectedInterior,
        setSelectedInterior,
        estimatedPrice,
        setEstimatedPrice
    } = useModelSettings(models[currentTab]?.basePrice || 0);
    const sections = ['모델 및 등급', '익스테리어', '인테리어', '선택완료'];

    return (
        <div className={'model_config_container'}>
            <main className={'model_config flex-column'}>
                {/* Top Menu */}
                <section className={'section_menu'}>
                    <div className={'model_title_wrap flex-space-between'}>
                        {/* Select Menu 로 변경 예정 */}
                        <h1>{modelId}</h1>
                        <p>나의 취향에 따라 옵션을 선택하고, 예상 견적을 확인하세요.</p>
                    </div>
                    <SelectMenu
                        id="test_drive_show_rooms1"
                        className="select_show_rooms"
                        options={models.map(({name, address}) => (
                            {value: address, label: name}
                        ))}
                        onChange={(e) => handleModelChange(e.target.value)}
                    />
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
                                <span>{fieldMappings[key] || [key]}</span>
                                <span><strong>{value}</strong></span>
                            </>
                        )}
                    </ProductInformation>
                    <div className={'tab_header_wrap flex-center'}>
                        {sections.map((sectionName, index) => (
                            <StatefulTab
                                key={index}
                                title={sectionName}
                                onClick={() => selectedSectionIndex(index)}
                                isSelected={selectedSectionIndex === index}
                            />
                        ))}
                    </div>
                </section>

                {/* Select Model Image */}
                <div className={'selected_model_display'}>
                    <section className={'section_model'}>
                        <ImageBlock
                            className={'selected_model_img'}
                            src={models[currentTab].imgWhitePear}
                            alt={models[currentTab].name}
                        />
                    </section>

                    {/* Select Model info */}
                    <section className={'config_info flex-column'}>
                        {/* 선택된 섹션에 해당하는 컴포넌트를 렌더링 */}
                        <div className={'configuration_content'}>
                            {ConfigurationContainer &&
                                <ConfigurationContainer
                                    modelId={modelId}
                                    selectedSection={sections[selectedSectionIndex]}
                                    selectedExterior={selectedExterior}
                                    selectedInterior={selectedInterior}
                                    modelGrade={modelGrade}
                                    estimatedPrice={estimatedPrice}
                                    onModelGradeChange={setModelGrade}
                                    onExteriorChange={setSelectedExterior}
                                    onInteriorChange={setSelectedInterior}
                                />
                            }
                        </div>

                        {/* Button */}
                        <ModelConfigButton
                            onPrev={prevSection}
                            onNext={nextSection}
                            isFinalStep={selectedSectionIndex === sections.length - 1}
                        />
                    </section>
                </div>
            </main>
        </div>
    );
}