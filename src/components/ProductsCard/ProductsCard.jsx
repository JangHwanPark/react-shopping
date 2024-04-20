import React from 'react';
import {Link} from "react-router-dom";

export default function ProductsCard({models}) {
    return (
        <section className={'product_card_container'}>
            {models.map(({name, basePrice, img}, index) => (
                <article key={index} className={'product_item'}>
                    <figure className={'product_image'}>
                        <img src={img} alt={name}/>
                    </figure>
                    <div className={'product_info_wrap'}>
                        <div className={'product_info'}>
                            <h2>{name}</h2>
                            <p><strong>{basePrice}원 ~</strong></p>
                        </div>
                        <div className={'product_actions'}>
                            <Link className={'btn-primary'} to={'/'}>상세보기</Link>
                            <Link className={'btn-primary'} to={'/test-drive'}>시승신청</Link>
                        </div>
                    </div>
                </article>
            ))}
        </section>
    );
}