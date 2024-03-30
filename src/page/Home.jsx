import React from 'react';
import CarouselSlide from "../components/CarouselSlide";

export default function Home(props) {
    return (
        <div className={'contents'}>
            <CarouselSlide/>
            <div>
                <div>ES</div>
                <div>RX</div>
                <div>NX</div>
                <div>LC</div>
            </div>
        </div>
    );
}