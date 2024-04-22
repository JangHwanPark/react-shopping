import React, {useState} from 'react';
import ModelsColorList from "../ModelSections/ModelsColorList";
import {ModelGradeSection} from "../ModelSections/ModelGradeSection";
import {FinalizeSection} from "../ModelSections/FinalizeSection";
import {exteriorColor, interiorColor} from "../../data/my_car";
import {useColorSelector} from "../../hooks/useElementSelector";

// ConfigurationContainer 컴포넌트는 차량 설정 도구의 메인 컨테이너
// 이 컴포넌트는 차량 모델, 색상 선택, 최종 가격 계산 등 다양한 섹션으로 구성
export default function ConfigurationContainer(props) {
    const {
        modelId,
        selectedSection,
        modelGrade,
        estimatedPrice,
    } = props;

    // useColorSelector 훅을 사용하여 외부 및 내부 색상의 상태를 관리
    const {colors, handleColorChange} = useColorSelector({
        exterior: exteriorColor[0].color,
        interior: interiorColor[0].color
    });

    // 각 섹션에 해당하는 컴포넌트를 매핑
    const SectionComponent = {
        '모델 및 등급': () => <ModelGradeSection {...props} />,
        '익스테리어': () => <ColorSection
            title="익스테리어 컬러"
            colorList={exteriorColor}
            selectedColor={colors.exterior}
            onColorChange={(color) => handleColorChange('exterior', color)}
        />,
        '인테리어': () => <ColorSection
            title="인테리어 컬러"
            colorList={interiorColor}
            selectedColor={colors.interior}
            onColorChange={(color) => handleColorChange('interior', color)}
        />,
        '선택완료': () => <FinalizeSection
            modelId={modelId}
            modelGrade={modelGrade}
            colors={colors}
            estimatedPrice={estimatedPrice}
        />
    }[selectedSection];

    // 선택된 섹션이 없을 경우 표시할 메시지
    if (!SectionComponent) return <p>섹션이 선택되지 않았습니다.</p>;
    return (
        <SectionComponent {...props} />
    );
}

// ColorSection 컴포넌트는 익스테리어 또는 인테리어 색상 선택
// 각 색상 옵션을 리스트 형태로 표시하며, 선택된 색상을 강조
function ColorSection({ title, colorList, selectedColor, onColorChange }) {
    return (
        <div className={`model_${title.toLowerCase().replace(" ", "_")}`}>
            <h2>{title}</h2>                    {/* 섹션 제목 */}
            <ModelsColorList
                title={title}                   // 색상 리스트 제목
                colorList={colorList}           // 색상 옵션 목록
                selectedColor={selectedColor}   // 현재 선택된 색상
                onColorChange={onColorChange}   // 색상 변경 처리 핸들러
            />
        </div>
    );
}