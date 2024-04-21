import React, {useEffect, useState} from 'react';
import SelectComponent from "../Select/SelectComponent";

const exteriorColor = [
    {'color': 'SONIC IRIDIUM'},
    {'color': 'SONIC CHROME'},
    {'color': 'SONIC QUARTZ'},
    {'color': 'SONIC TITANIUM'},
    {'color': 'GRAPHITE BLACK GLASS FLAKE'},
    {'color': 'RED MICA CRYSTAL SHINE'},
    {'color': 'ICE ECRU MICA METALLIC'},
    {'color': 'SUNLIGHT GREEN MICA METALLIC'},
    {'color': 'DEEP BLUE MICA'},
]

const interiorColor = [
    {'color': 'HAZEL'},
    {'color': 'SOLIS WHITE'},
    {'color': 'MAUVE'},
    {'color': 'BLACK'},
]

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
// Todo: DummyData
export function ExteriorSection({ onExteriorChange }) {
    // 첫 번째 색상을 기본값으로 설정
    const [selectedColor, setSelectedColor] = useState(exteriorColor[0].color);

    // 외부로부터 변경을 받아오는 경우 업데이트
    useEffect(() => {
        onExteriorChange(selectedColor);
    }, [selectedColor, onExteriorChange]);

    const handleChange = (e) => {
        setSelectedColor(e.target.value);
    };

    return (
        <div className={'model_exterior'}>
            <h2>익스테리어 색상</h2>
            <SelectComponent
                selectItems={exteriorColor}
                labelKey="color"
                valueKey="color"
                onChange={handleChange}
            />
        </div>
    );
}

// 인테리어 섹션 컴포넌트
// Todo: DummyData
export function InteriorSection({ onInteriorChange }) {
    const [selectedInterior, setSelectedInterior] = useState(interiorColor[0].color);  // Default interior color set

    useEffect(() => {
        onInteriorChange(selectedInterior);
    }, [selectedInterior, onInteriorChange]);

    const handleChange = (e) => {
        setSelectedInterior(e.target.value);
    };

    return (
        <div className={'model_interior'}>
            <h2>인테리어 색상</h2>
            <SelectComponent
                selectItems={interiorColor}
                labelKey="color"
                valueKey="color"
                onChange={handleChange}
            />
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
    console.log('select: ', modelGrade, selectedExterior, selectedInterior);

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