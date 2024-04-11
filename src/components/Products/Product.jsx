import React from 'react';

export default function Product({model, index}) {
    const {name, basePrice, img} = model;

    return (
        <div key={index}>
            <div>
                <h3>{name}</h3>
                <p>{basePrice} 원</p>
            </div>
            <div>
                <img src={img} alt={name}/>
            </div>
            <div>
                <button>상세보기</button>
                <button>시승신청</button>
            </div>
        </div>
    );
}