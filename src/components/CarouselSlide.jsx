import React, {useState} from 'react';
import styles from './CarouselSlide.module.css';
import {logDOM} from "@testing-library/react";

export default function CarouselSlide(props) {
    const test = [
        {key: 1, label: "CarouselSlide1"},
        {key: 2, label: "CarouselSlide2"},
        {key: 3, label: "CarouselSlide3"},
    ];

    const [slideIdx, setSlideIdx] = useState(0);
    
    // 슬라이드 버튼 클릭시 해당 인덱스 이미지로 이동
    const handleClick = (index) => {
        console.log(index, test[index], slideIdx)
        setSlideIdx(index);
    }

    return (
        <div>
            <div className={styles.carousel_viewport}>
                <div className={styles.carousel_container}>
                    {console.log("slideIdx", slideIdx)}
                    {test.map(({key, label}) => (
                        <div
                            key={key}
                            className={styles.carousel_item}
                            style={{transform: `translateX(-${slideIdx * 100}%)`}}
                        >
                            {label}
                        </div>
                    ))}
                </div>
            </div>
            <div>
                {test.map(({key}, index) => (
                    <button key={key} onClick={() => handleClick(index)}>
                        {key}
                    </button>
                ))}
            </div>
        </div>
    );
}