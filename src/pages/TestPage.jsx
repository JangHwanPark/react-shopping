import React, {useState} from 'react';
import ColorList from "../components/ColorList/ColorList";
import models from "../data/models.json";
import SelectMenu from "../components/Select/SelectMenu";

export default function TestPage() {
    const modelId = 'ES 300h'
    // 모든 모델을 옵션으로 변환하고, 특정 모델 ID를 첫 번째 옵션으로 설정
    const options = [
        { value: modelId, label: modelId },
        ...models.map(({ name }) => ({ value: name, label: name }))
    ];
    return (
        <div>
            <SelectMenu
                id="test_drive_show_rooms1"
                className="select_show_rooms"
                options={options}
            />
        </div>
    );
}