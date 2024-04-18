import React from 'react';
import Title from "../components/Title/Title";
import Category from "../components/Category/Category";

export default function MyAccount() {
    return (
        <div className="pg_container">
            <Title titleText={'MY ACCOUNT'}/>
            <Category categories={['마이카', '내정보']}/>
            <main>
                <section>
                    <h2>사용자 보유 차량</h2>
                    <dl>
                        <dt>대표 차량:</dt>
                        <dd>차량 번호: [번호]</dd>
                        <dd>차량 별명: [별명]</dd>
                        <dd>모델명: [모델]</dd>
                        <dd>차대번호: [차대번호]</dd>
                        <dd>출고 일자: [일자]</dd>
                    </dl>
                </section>
                <section>
                    <h2>최근 정비 내역</h2>
                    <address>
                        서비스 센터명: [센터명]<br/>
                        담당 SA: [SA명]<br/>
                        전화: [전화번호]<br/>
                        위치: [위치]
                    </address>
                </section>
                <section className={''}>
                    <h2>사용자 정보</h2>
                    <dl>
                        <dt>이름:</dt><dd>[이름]</dd>
                        <dt>휴대폰 번호:</dt><dd>[번호]</dd>
                        <dt>성별:</dt><dd>[성별]</dd>
                        <dt>생일:</dt><dd>[생일]</dd>
                        <dt>결혼 유무:</dt><dd>[결혼 유무]</dd>
                        <dt>직업:</dt><dd>[직업]</dd>
                        <dt>관심:</dt><dd>[관심사]</dd>
                    </dl>
                </section>
            </main>
        </div>
    );
}