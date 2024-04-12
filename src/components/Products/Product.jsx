import React from 'react';
import Button from "../Button/Button";

export default function Product({models}) {
    return (
        <div>
            {models.map(({name, basePrice, img}, index) => (
                <div key={index}>
                    <div>
                        <h3>{name}</h3>
                        <p>{basePrice} 원</p>
                    </div>
                    <div>
                        <img src={img} alt={name}/>
                    </div>
                    <div>
                        <Button title={'상세보기'}/>
                        <Button title={'시승신청'}/>
                    </div>
                </div>
            ))}
        </div>
    );
}