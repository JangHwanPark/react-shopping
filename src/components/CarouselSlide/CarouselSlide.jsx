import React, {useState} from 'react';
import styles from './CarouselSlide.module.css';
import carouselImg from '../../data/carousel_img.json';

export default function CarouselSlide() {
    const [slideIdx, setSlideIdx] = useState(0);
    
    // 슬라이드 버튼 클릭시 해당 인덱스 이미지로 이동
    const handleClick = (index) => {
        if (slideIdx !== index) {
            setSlideIdx(index);     // 불필요한 상태 업데이트 방지
        }
    }

    return (
        <div className={styles.carousel}>
            <div className={styles.carouselViewport}>
                <div className={styles.carouselTrack}>
                    {carouselImg.map(({titleImg}, index) => (
                        <figure
                            key={index}
                            className={styles.slideElement}
                            style={{transform: `translateX(-${slideIdx * 100}%)`}}
                        >
                            <img src={titleImg} alt={`타이틀 이미지 ${index + 1}`}/>
                        </figure>
                    ))}
                </div>
            </div>
            <nav className={styles.carouselNavigation}>
                {carouselImg.map((_, index) => (
                    <button
                        key={index}
                        className={styles.carouselButton}
                        onClick={() => handleClick(index)}
                    >
                        {index + 1}
                    </button>
                ))}
            </nav>
        </div>
    );
}