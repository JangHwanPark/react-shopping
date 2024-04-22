import React, {useEffect, useState} from 'react';

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
                <li className={'btn-primary'} onClick={() => handleGradeChange('EXECUTIVE')}>EXECUTIVE</li>
                <li className={'btn-primary'} onClick={() => handleGradeChange('LUXURY +')}>LUXURY +</li>
            </ul>
        </div>
    );
}