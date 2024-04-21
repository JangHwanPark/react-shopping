import React from 'react';
import models from "../data/models.json";
import ImageBlock from "../components/Image/ImageBlock";
import NavigationalTabs from "../components/NavigationalTabs/NavigationalTabs";

export default function ModelLayout({ title, currentTab, setCurrentTab, children }) {
    // models 배열과 currentTab 값이 유효한지 확인
    if (!models || !models[currentTab]) return <div>Loading or no model data available...</div>;


    // DebugLog
    console.log(currentTab)

    return (
        <main className={'models_container flex-column'}>
            {/* Top */}
            <NavigationalTabs
                title={title}
                items={models.map(model => ({ name: model.name, path: model.path }))}

                onTabSelect={setCurrentTab}
                currentTab={currentTab}
            />

            {/* 이미지 컴포넌트: 선택한 모델 출력 */}
            <ImageBlock
                className={'selected_model_img'}
                src={models [currentTab].imgWhitePear}
                alt={models [currentTab].name}
            />
            {children}
        </main>
    );
}