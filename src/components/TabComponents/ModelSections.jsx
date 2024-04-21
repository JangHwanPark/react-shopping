import React, {useEffect, useState} from 'react';
import SelectComponent from "../Select/SelectComponent";
import ColorList from "../ColorList/ColorList";
import {exteriorColor, interiorColor} from "../../data/my_car";


// ModelSections 객체 정의
const ModelSections = {
    '모델 및 등급': ModelGradeSection,
    '익스테리어': ExteriorSection,
    '인테리어': InteriorSection,
    '선택완료': FinalizeSection,
};

// 모델 및 등급 섹션 컴포넌트
export function ModelGradeSection({ onModelGradeChange }) {
    const [selectedGrade, setSelectedGrade] = useState('EXECUTIVE');  // Default grade set

    useEffect(() => {
        onModelGradeChange(selectedGrade);
    }, [selectedGrade, onModelGradeChange]);

    const handleGradeChange = (grade) => {
        setSelectedGrade(grade);
    };

    return (
        <div className={'model_grade'}>
            <h2>모델 및 등급</h2>
            <ul>
                <li onClick={() => handleGradeChange('EXECUTIVE')}>EXECUTIVE</li>
                <li onClick={() => handleGradeChange('LUXURY +')}>LUXURY +</li>
            </ul>
        </div>
    );
}

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

// 선택완료 섹션 컴포넌트
export function FinalizeSection({ modelId, selectedExterior, selectedInterior, modelGrade, estimatedPrice }) {
    return (
        <div className={'model_finalize flex-column'}>
            <h2>선택완료</h2>
            <p>모델 이름: {modelId}</p>
            <p>모델 등급: {modelGrade}</p>
            <p>익스테리어: {selectedExterior}</p>
            <p>인테리어: {selectedInterior}</p>
            <p>예상 금액: {estimatedPrice}</p>
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