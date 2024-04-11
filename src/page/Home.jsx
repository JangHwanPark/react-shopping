import React from 'react';
import models from '../data/models.json';

import CarouselSlide from "../components/CarouselSlide/CarouselSlide";
import Product from "../components/Products/Product";

export default function Home() {
    return (
        <div className={'contents'}>
            <CarouselSlide/>
            <div>
                {models.map((model, index) => (
                    <Product model={model} key={index}/>
                ))}
            </div>
        </div>
    );
}