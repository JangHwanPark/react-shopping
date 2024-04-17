import React from 'react';
import models from '../data/models.json';

import CarouselSlide from "../components/CarouselSlide/CarouselSlide";
import ProductsCard from "../components/ProductsCard/ProductsCard";

export default function Home() {
    return (
        <main className={'contents'}>
            <CarouselSlide/>
            <ProductsCard models={models}/>
        </main>
    );
}