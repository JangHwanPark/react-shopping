// 선택완료 섹션 컴포넌트
import React from "react";

export function FinalizeSection({ ...rest }) {
    const { modelId, colors, modelGrade, estimatedPrice } = rest;

    return (
        <div className={'model_finalize flex-column'}>
            <h2>선택완료</h2>
            <p>모델 이름: {modelId}</p>
            <p>모델 등급: {modelGrade}</p>
            <p>익스테리어: {colors.exterior}</p>
            <p>인테리어: {colors.interior}</p>
            <p>예상 금액: {estimatedPrice}</p>
        </div>
    );
}