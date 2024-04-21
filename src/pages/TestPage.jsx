import React, {useState} from 'react';
import ColorList from "../components/ColorList/ColorList";
import {exteriorColor, interiorColor} from "../data/my_car";

export default function TestPage() {
    const [currentColor, setCurrentColor] = useState(0);
    return (
        <div>
            <ColorList
                title={'익스테리어 컬러'}
                colorList={exteriorColor}
                currentColor={currentColor}
                setCurrentColor={setCurrentColor}
            />
            <ColorList
                title={'인테리어 컬러'}
                colorList={interiorColor}
                currentColor={currentColor}
                setCurrentColor={setCurrentColor}
            />

            {/* 인테리어 컬러 */}
        </div>
    );
}