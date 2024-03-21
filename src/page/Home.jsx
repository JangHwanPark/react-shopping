import React from 'react';
import CarouselSlide from "../components/CarouselSlide";

export default function Home(props) {
    return (
        <div className={'contents'}>
            <CarouselSlide/>
            <div>
                <div>img1</div>
                <div>img2</div>
                <div>img3</div>
            </div>
        </div>
    );
}