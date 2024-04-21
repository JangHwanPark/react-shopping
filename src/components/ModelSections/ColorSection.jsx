import React from 'react';
import ColorList from "../ColorList/ColorList";
import {interiorColor} from "../../data/my_car";

export default function ColorSection({title, colors}) {
    return (
        <div className={'model_interior'}>
            <h2>{title}</h2>
            <ColorList title={title} colorList={colors}/>
        </div>
    );
}