import React from 'react';
import {useColorSelector} from "../../hooks/useElementSelector";
import useModelSettings from "../../hooks/useModelSettings";

export default function ModelsColorList({...rest}) {
    const {title, colorList} = rest
    const [currentColor, handleColorChange] = useColorSelector(colorList[0].color);

    return (
        <div className="top_wrapper">
            <h4>{title}</h4>
            {/* 선택한 차량의 색상 리스트 */}
            <ul className={'color_list'}>
                {colorList.map((item, index) => (
                    <li
                        key={index}
                        className={`color_item
                        ${item.color
                            .toLowerCase()
                            .replace(/ /g, '-')}`}
                    >
                        <button
                            style={{backgroundColor: item.rgb}}
                            className={`color_button ${item.color === currentColor ? 'active' : ''}`}
                            onClick={() => handleColorChange(item.color)}
                        >
                        </button>
                    </li>
                ))}
            </ul>

            {/* 옵션이 적용시 추가되는 금액 */}
            <div className="detail_text">
                <span className="color_name">{currentColor}</span>
                <span><span className="price_tag">+0</span> 원</span>
            </div>
        </div>
    );
}