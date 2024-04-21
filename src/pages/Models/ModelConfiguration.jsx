import React, {useEffect, useState} from 'react';
import {useTab} from "../../context/TabContext";
import ImageBlock from "../../components/Image/ImageBlock";
import models from "../../data/models.json";
import ProductInformation from "../../components/ProductsInformation/ProductInformation";
import {useNavigate, useParams} from "react-router-dom";
import StatefulTab from "../../components/TabComponents/StatefulTab";
import ModelConfigButton from "../../components/Button/ModelConfigButton";
import ConfigurationContainer from "../../components/TabComponents/ModelSections";
import SelectMenu from "../../components/Select/SelectMenu";

export default function ModelConfiguration() {
    const navigate = useNavigate();
    const {modelId} = useParams();
    const {currentTab, setCurrentTab} = useTab();
    const [selectedModel, setSelectedModel] = useState(modelId); // 초기 상태를 useParams로 설정

    // 각 섹션의 현재 선택 상태를 관리하는 상태 변수
    const sections = ['모델 및 등급', '익스테리어', '인테리어', '선택완료'];
    const [selectedSectionIndex, setSelectedSectionIndex] = useState(0);

    // 사용자 정의 모델 상태 저장
    const [modelGrade, setModelGrade] = useState('');
    const [selectedExterior, setSelectedExterior] = useState('');
    const [selectedInterior, setSelectedInterior] = useState('');
    const [estimatedPrice, setEstimatedPrice] = useState(models[currentTab].basePrice);

    const handleModelGradeChange = (grade) => setModelGrade(grade);
    const handleExteriorChange = (color) => setSelectedExterior(color);
    const handleInteriorChange = (color) => setSelectedInterior(color);

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

    // 모델 변경에 따라 처리할 로직
    useEffect(() => {
        // 모델 ID에 따라 필요한 데이터를 불러오거나 상태를 업데이트
        setSelectedModel(modelId);
    }, [modelId]);

    // 셀렉트 메뉴에서 모델 변경 처리
    const handleModelChange = (newModelId) => {
        setSelectedModel(newModelId);
        updateCurrentTab(newModelId)
        navigate(`/model/${newModelId}/model-configuration`); // 새로운 모델 ID로 라우트 변경
    };

    // 모델 ID에 따라 탭 인덱스를 업데이트
    const updateCurrentTab = (modelId) => {
        const tabIndex = models.findIndex(model => model.name === modelId);
        console.log(tabIndex, modelId)
        if (tabIndex !== -1) setCurrentTab(tabIndex);
    };

    console.log('ModelConfiguration test: ', selectedModel)
    console.log('ModelConfiguration currentTab: ', currentTab)
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
                                <span>{key}</span>
                                <span><strong>{value}</strong></span>
                            </>
                        )}
                    </ProductInformation>
                    <div className={'tab_header_wrap flex-center'}>
                        {['모델 및 등급', '익스테리어', '인테리어', '선택완료'].map((sectionName, index) => (
                            <StatefulTab
                                key={index}
                                title={sectionName}
                                onClick={() => setSelectedSectionIndex(index)}
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
                                    onModelGradeChange={handleModelGradeChange}
                                    onExteriorChange={handleExteriorChange}
                                    onInteriorChange={handleInteriorChange}
                                />
                            }
                        </div>

                        {/* Button */}
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