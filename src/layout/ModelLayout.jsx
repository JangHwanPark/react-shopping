import React from 'react';
import TabView from "../components/TabView/TabView";

export default function ModelLayout({ title, currentTab, setCurrentTab, children }) {
    return (
        <main className={'models_container'}>
            {/* Top */}
            <TabView title={title} currentTab={currentTab} setCurrentTab={setCurrentTab}/>
            {children}
        </main>
    );
}