import React, {useState} from 'react';
import styles from './CarouselSlide.module.css';
import carousel_img from '../../data/carousel_img.json';

export default function CarouselSlide() {
    const [slideIdx, setSlideIdx] = useState(0);
    
    // 슬라이드 버튼 클릭시 해당 인덱스 이미지로 이동
    const handleClick = (index) => {
        if (slideIdx !== index) {
            setSlideIdx(index);     // 불필요한 상태 업데이트 방지
        }
    }

    return (
        <div>
            <div className={styles.carousel_viewport}>
                <div className={styles.carousel_container}>
                    {carousel_img.map(({titleImg}, index) => (
                        <div
                            key={index}
                            className={styles.carousel_item}
                            style={{transform: `translateX(-${slideIdx * 100}%)`}}
                        >
                            <img src={titleImg} alt={`타이틀 이미지 ${index + 1}`}/>
                        </div>
                    ))}
                </div>
            </div>
            <div>
                {carousel_img.map((_, index) => (
                    <button key={index} onClick={() => handleClick(index)}>
                        {index + 1}
                    </button>
                ))}
            </div>
        </div>
    );
}