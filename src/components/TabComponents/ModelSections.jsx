import React from 'react';

// 모델 및 등급 섹션 컴포넌트
export function ModelGradeSection() {
    return (
        <div>
            {/* 여기에 '모델 및 등급' 관련 내용을 구현합니다 */}
            <h2>모델 및 등급</h2>
            {/* 해당 섹션의 내용 */}
        </div>
    );
}

// 익스테리어 섹션 컴포넌트
export function ExteriorSection() {
    return (
        <div>
            {/* 여기에 '익스테리어' 관련 내용을 구현합니다 */}
            <h2>익스테리어</h2>
            {/* 해당 섹션의 내용 */}
        </div>
    );
}

// 인테리어 섹션 컴포넌트
export function InteriorSection() {
    return (
        <div>
            {/* 여기에 '인테리어' 관련 내용을 구현합니다 */}
            <h2>인테리어</h2>
            {/* 해당 섹션의 내용 */}
        </div>
    );
}

// 선택완료 섹션 컴포넌트
export function FinalizeSection() {
    return (
        <div>
            {/* 여기에 '선택완료' 관련 내용을 구현합니다 */}
            <h2>선택완료</h2>
            {/* 해당 섹션의 내용 */}
        </div>
    );
}

// 모든 섹션을 하나의 객체로 내보냅니다.
const ModelSections = {
    '모델 및 등급': ModelGradeSection,
    '익스테리어': ExteriorSection,
    '인테리어': InteriorSection,
    '선택완료': FinalizeSection,
};

export default function ConfigurationContainer({ selectedSection }) {
    const SectionComponent = ModelSections[selectedSection];
    return (
        <div>
            {SectionComponent ? <SectionComponent /> : <p>섹션이 선택되지 않았습니다.</p>}
        </div>
    );
}