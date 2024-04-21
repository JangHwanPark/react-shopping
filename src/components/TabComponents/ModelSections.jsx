import React, {useEffect, useState} from 'react';
import ColorList from "../ColorList/ColorList";
import {exteriorColor, interiorColor} from "../../data/my_car";
import {ModelGradeSection} from "../ModelSections/ModelGradeSection";
import {FinalizeSection} from "../ModelSections/FinalizeSection";


// ModelSections 객체 정의
const ModelSections = {
    '모델 및 등급': ModelGradeSection,
    '익스테리어': ExteriorSection,
    '인테리어': InteriorSection,
    '선택완료': FinalizeSection,
};

// 익스테리어 섹션 컴포넌트
export function ExteriorSection() {
    return (
        <div className={'model_exterior'}>
            <h2>익스테리어 색상</h2>
            <ColorList title={'익스테리어 컬러'} colorList={exteriorColor}/>
        </div>
    );
}

// 인테리어 섹션 컴포넌트
export function InteriorSection() {
    return (
        <div className={'model_interior'}>
            <h2>인테리어 색상</h2>
            <ColorList title={'인테리어 컬러'} colorList={interiorColor}/>
        </div>
    );
}

export default function ConfigurationContainer({ modelId, selectedSection, selectedExterior, selectedInterior, modelGrade, estimatedPrice, onExteriorChange, onInteriorChange, onModelGradeChange }) {
    const SectionComponent = ModelSections[selectedSection];
    if (!SectionComponent) {
        return <p>섹션이 선택되지 않았습니다.</p>;
    }

    return <SectionComponent
        modelId={modelId}
        selectedExterior={selectedExterior}
        selectedInterior={selectedInterior}
        modelGrade={modelGrade}
        estimatedPrice={estimatedPrice}
        onExteriorChange={onExteriorChange}
        onInteriorChange={onInteriorChange}
        onModelGradeChange={onModelGradeChange}
    />;
}