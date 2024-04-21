import React from 'react';
import models from '../data/models.json';

import CarouselSlide from "../components/CarouselSlide/CarouselSlide";
import ProductsCard from "../components/ProductsCard/ProductsCard";
import StatefulTab from "../components/TabComponents/StatefulTab";

export default function Home() {
    return (
        <main className={'contents flex-column'}>
            <CarouselSlide/>
            <div className={'models_tap flex-space-between'}>
                <h2>MODELS</h2>
                <div className={'select_model_type'}>
                    {['ELECTRIFIED', 'F SPORT', 'SEDAN', 'SUV', 'PERFORMANCE'].map((sectionName, index) => (
                        <StatefulTab
                            key={index}
                            title={sectionName}
                        />
                    ))}
                </div>
            </div>
            <ProductsCard models={models}/>
        </main>
    );
}