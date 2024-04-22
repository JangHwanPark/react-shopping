import React from 'react';
import ModelsColorList from "../ModelSections/ModelsColorList";
import {ModelGradeSection} from "../ModelSections/ModelGradeSection";
import {FinalizeSection} from "../ModelSections/FinalizeSection";
import {exteriorColor, interiorColor} from "../../data/my_car";
import {useColorSelector} from "../../hooks/useElementSelector";

// 상태를 위로 올리고, 각 섹션 컴포넌트에 필요한 Props를 전달합니다.
export default function ConfigurationContainer(props) {
    const {
        modelId,
        selectedSection,
        modelGrade,
        estimatedPrice,
        onExteriorChange,
        onInteriorChange, onModelGradeChange
    } = props;

    const SectionComponent = {
        '모델 및 등급': () => <ModelGradeSection {...props} />,
        '익스테리어': () => <ColorSection
            title="익스테리어 컬러"
            colorList={exteriorColor}
            onChange={onExteriorChange}
        />,
        '인테리어': () => <ColorSection
            title="인테리어 컬러"
            colorList={interiorColor}
            onChange={onInteriorChange}
        />,
        '선택완료': () => <FinalizeSection
            modelId={modelId}
            modelGrade={modelGrade}
            estimatedPrice={estimatedPrice}
        />
    }[selectedSection];

    if (!SectionComponent) return <p>섹션이 선택되지 않았습니다.</p>;
    return (
        <SectionComponent {...props} />
    );
}

// 익스테리어와 인테리어 컴포넌트를 하나의 컴포넌트로 합침
function ColorSection({ title, colorList, onChange }) {
    const [selectedColor, setSelectedColor, handleColorChange] = useColorSelector(colorList[0].color);
    console.log('selectedColor: ', selectedColor, onChange)
    return (
        <div className={`model_${title.toLowerCase().replace(" ", "_")}`}>
            <h2>{title}</h2>
            <ModelsColorList
                title={title}
                colorList={colorList}
                onChange={onChange}
                selectedColor={selectedColor}
            />
        </div>
    );
}