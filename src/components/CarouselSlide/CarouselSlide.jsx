import React, {useState} from 'react';
import carouselImg from '../../data/carousel_img.json';
import CarouselButton from "../Button/CarouselButton";

export default function CarouselSlide() {
    const [slideIdx, setSlideIdx] = useState(0);
    
    // 슬라이드 버튼 클릭시 해당 인덱스 이미지로 이동
    const handleClick = (index) => {
        if (slideIdx !== index) {
            setSlideIdx(index);     // 불필요한 상태 업데이트 방지
        }
    }

    return (
        <div className={'carousel'}>
            <div className={'carousel_viewport'}>
                <div className={'carousel_track'}>
                    {carouselImg.map(({titleImg}, index) => (
                        <figure
                            key={index}
                            className={'slide_element'}
                            style={{transform: `translateX(-${slideIdx * 100}%)`}}
                        >
                            <img src={titleImg} alt={`타이틀 이미지 ${index + 1}`}/>
                        </figure>
                    ))}
                </div>
            </div>
            <nav className={'carousel_navigation'}>
                {carouselImg.map((_, index) => (
                    <CarouselButton
                        key={index}
                        className={'carousel_button'}
                        onClick={() => handleClick(index)}
                        label={index + 1}
                    />
                ))}
            </nav>
        </div>
    );
}