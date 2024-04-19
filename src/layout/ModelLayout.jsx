import React from 'react';
import models from "../data/models.json";
import TabView from "../components/TabView/TabView";
import ImageBlock from "../components/Image/ImageBlock";

export default function ModelLayout({ title, currentTab, setCurrentTab, children }) {
    return (
        <main className={'models_container'}>
            {/* Top */}
            <TabView
                title={title}
                currentTab={currentTab}
                setCurrentTab={setCurrentTab}
            />

            {/* 이미지 컴포넌트: 선택한 모델 출력 */}
            <ImageBlock
                className={'selected_model_img'}
                src={models[currentTab].imgWhitePear}
                alt={models[currentTab].name}
            />
            {children}
        </main>
    );
}